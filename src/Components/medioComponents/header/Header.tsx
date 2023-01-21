import React from "react";

import Logo from "../../../assets/logo.png";
import { Image } from "../../miniComponents/ImagesComponent/Image";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Image src={Logo} alt="Logo" />
    </header>
  );
};

export { Header };
