import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";

function App() {
  const location = useLocation();
  const [toggleIcon, setToggleIcon] = useState(false); // Add state for toggleIcon

  const closeMenu = () => {
    setToggleIcon(false); // Assuming you have a state to control the menu
  };

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const handleToggleIcon = (newToggleState) => {
    setToggleIcon(newToggleState);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar toggleIcon={toggleIcon} handleToggleIcon={handleToggleIcon} />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
        <Route
            index
            path="/"
            element={<Home toggleIcon={toggleIcon}  />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
