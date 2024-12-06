import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(chartRef.current, {
      type,
      data,
      options,
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;