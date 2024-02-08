import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Vedant Dalal,
          <br />
          A web developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        fps={60}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0)",
        }}
        easeType="cubic-bezier(0.68, -0.55, 0.27, 1.55)"
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
