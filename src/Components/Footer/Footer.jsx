import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-5 gap-8">
      <nav className="grid grid-flow-col gap-5">
        <Link to={"/"} className="link link-hover">
          Home
        </Link>
        <Link to={"/apps"} className="link link-hover">
          Apps
        </Link>
        <Link to={"/installation"} className="link link-hover">
          Installation
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/hasnatfahmidkhan" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/hasnatfahmid/" target="_blank">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.facebook.com/hasnatfahmidkhan" target="_blank">
            <FaFacebook size={30} />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {currentDate} - All right reserved by Prodify.</p>
      </aside>
    </footer>
  );
};

export default Footer;
