import React from "react";
import Stats from "./Stats/Stats.jsx";
import Filter from "./Filter/Filter.jsx";
import "../../Styles/Common.css";
import Table from "./Table/Table.jsx";

const Dashboard = () => {
  return (
    <div className="dashboad-main-contents">
      <Stats />
      <Filter />
      <Table />
    </div>
  );
};

export default Dashboard;
