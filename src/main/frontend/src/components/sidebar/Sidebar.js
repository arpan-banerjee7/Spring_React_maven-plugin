import { Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css";
import MultilineChartIcon from "@material-ui/icons/MultilineChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import TableChartIcon from "@material-ui/icons/TableChart";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar_item">
      <TableChartIcon />
      <Link className="list" to="/">
        React Table
      </Link>
    </div>
    <div className="sidebar_item">
      <MultilineChartIcon className="linechart_icon" />
      <Link className="list" to="/linechart">
        Line Chart
      </Link>
    </div>
    <div className="sidebar_item">
      <PieChartIcon className="linechart_icon" />
      <Link className="list" to="/piechart">
        Pie Chart
      </Link>
    </div>
  </div>
);

export default Sidebar;
