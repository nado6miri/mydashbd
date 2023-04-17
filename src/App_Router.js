import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { Router, Route, Routes, Link, NavLink } from "react-router-dom";

import Home from "./study/router/router_Home";
import About from "./study/router/router_About";
import Profile from "./study/router/router_Profile";
import Profiles from "./study/router/router_Profiles";
import NewsService_Ex from "./study/externalApi/newsApi";

function App_Router() {
  const activeStyle = {
    background: "red",
    color: "white",
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/news" element={<NewsService_Ex />} />
      </Routes>
    </div>
  );
}

export default App_Router;
