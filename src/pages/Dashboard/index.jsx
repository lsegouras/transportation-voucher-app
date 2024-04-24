import React from "react";
import { Line } from "react-chartjs-2";
import * as C from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Payed Transportation Voucher to Employees",
        data: [2350, 2130, 2450, 2560, 2270, 2320, 1990],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <C.Container>
      <C.Title>Dashboard</C.Title>
      <C.ChartContainer style={{ height: "400px", width: "600px" }}>
        <Line data={data} options={options} />
      </C.ChartContainer>
      <Link to="/home">
        <Button Text="Back to Home" />
      </Link>
    </C.Container>
  );
};

export default Dashboard;
