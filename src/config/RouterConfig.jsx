import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
