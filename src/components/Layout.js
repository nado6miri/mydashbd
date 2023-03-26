import React from "react";

// add here
import "../common/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import MainBody from "./MainBody";
import MainMenu from "./MainMenu";
import MenuList from "./MenuList";

function Layout() {
  return (
    <div>
      <Header />
      <Footer />
      <div>
        <div className="MenuDiv">
          {/* <MainMenu /> */}
          <MenuList />
        </div>
        <div className="MainDiv">
          <MainBody />
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Layout;
