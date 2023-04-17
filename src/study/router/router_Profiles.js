import React from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Profile from "./router_Profile";

//sub route

const Profiles = () => {
  return (
    <div>
      <h1>Profile Page - sub route 예제입니다.</h1>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/ssam">ssam</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/profiles"
          exact
          render={() => <div>사용자를 선택해 주세요</div>}
        />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;

// https://velog.io/@velopert/react-router-v6-tutorial
