import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [
      {
        label: "Sales, Expenses & Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 30, 
        })),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const bubbleChartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `Expense: ${tooltipItem.raw.x}, Profit: ${tooltipItem.raw.y}, Sales: ${tooltipItem.raw.r * 10}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Expenses",
        },
      },
      y: {
        title: {
          display: true,
          text: "Profits",
        },
      },
    },
  };

  return (
    <ChartComponent
      type="bubble"
      data={bubbleChartData}
      options={bubbleChartOptions}
    />
  );
};

export default BubbleChart;