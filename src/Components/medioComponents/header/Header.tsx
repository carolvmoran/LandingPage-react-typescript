import React from "react";

import Logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
    </header>
  );
};

export { Header };
