import React from "react";
import HeaderComp from "./partials/HeaderComp";
import FooterComp from "./partials/FooterComp";

const DefaultLayout = ({children}) => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <HeaderComp />
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <FooterComp />
      </footer>
    </div>
  );
};

export default DefaultLayout;
