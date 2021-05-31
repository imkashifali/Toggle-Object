import React from "react";
import FooterComp from "./partials/FooterComp";
import HeaderComp from "./partials/HeaderComp";

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <HeaderComp />
      </header>

      <main className="main">Main Content</main>

      <footer className="footer">
        <FooterComp />
      </footer>
    </div>
  );
};

export default DefaultLayout;
