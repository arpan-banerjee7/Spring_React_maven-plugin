import { Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Link className="list" to="/">
        React Table
      </Link>
    </div>
    <div>
      <Link className="list" to="/linechart">
        Line Chart
      </Link>
    </div>
    <div>
      <Link className="list" to="/piechart">
        Pie Chart
      </Link>
    </div>
  </div>
);

export default Sidebar;
