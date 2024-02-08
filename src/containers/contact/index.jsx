import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import GithubImage from "../../images/github.png";
import Linkedin from "../../images/linkedin.webp";
import mail from "../../images/mail.jpg"
import {Link} from 'react-router-dom'
import "./styles.scss";

const Contact = () => {
  const email = 'vedantdalal100@gmail.com';

  const handleMailMeClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          
        </Animate>
      </div>

      {/* Social Media Links */}
      <div className="sml">

       
        <a href="https://www.github.com/vedantd25" target="_blank" rel="noopener noreferrer">
          <img src={GithubImage} alt="GitHub" className="github-image" />
        </a>
          
        <div >
          <a href="#" onClick={handleMailMeClick}>
            <img src={mail} alt="Mail Me" className="mail-image"/>
          </a>
        </div>

        <a href="https://www.linkedin.com/in/vedantd25/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="Linkedin" className="linkedin-image" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
