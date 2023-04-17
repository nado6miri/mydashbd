import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./router_About";
import Home from "./router_Home";
import Profile from "./router_Profile";

const Router_Ex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </div>
  );
};

export default Router_Ex;

// https://velog.io/@velopert/react-router-v6-tutorial
