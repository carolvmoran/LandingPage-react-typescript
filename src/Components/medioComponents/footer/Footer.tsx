import React from "react";

import Logo from "../../../assets/logo.png";
import { Image } from "../../miniComponents/ImagesComponent/Image";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Image src={Logo} alt="Logo" />
    </footer>
  );
};

export { Footer };
