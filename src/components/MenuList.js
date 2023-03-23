import React, { useState } from "react";

//const App = () => {
function MenuList() {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <div>
        <ul>
          <li onClick={() => handleMenuClick("home")}>Home</li>
          <li onClick={() => handleMenuClick("about")}>About</li>
          <li onClick={() => handleMenuClick("contact")}>Contact</li>
        </ul>
      </div>
      <div>
        {selectedMenu === "home" && <Home />}
        {selectedMenu === "about" && <About />}
        {selectedMenu === "contact" && <Contact />}
      </div>
    </div>
  );
}

const Home = () => {
  return <h1>Welcome to the home page!</h1>;
};

const About = () => {
  return <h1>About us</h1>;
};

const Contact = () => {
  return <h1>Contact us</h1>;
};

export default MenuList;
