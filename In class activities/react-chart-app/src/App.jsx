import React, { useState, useEffect } from "react";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/financial_data.json") 
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Financial Dashboard</h1>
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;