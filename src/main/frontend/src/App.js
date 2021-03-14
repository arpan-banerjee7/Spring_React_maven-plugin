import "./App.css";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/routes/Routes";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      {/* bem naming convention */}
      <div className="app">
        <div className="app_header">
          <Header />
        </div>

        <div className="app_body">
          <Sidebar />
          <div className="app_main_content">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
