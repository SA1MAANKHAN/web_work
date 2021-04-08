import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import "./Home.css";
import Option from "./Option";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="options">
        <Link className="link" to="/Type">
          <Option optionName="Flag Quiz" />
        </Link>
        <Link className="link" to="/Type">
          <Option optionName="City Quiz" />
        </Link>
        <Link className="link" to="/Type">
          <Option optionName="Currency" />
        </Link>

        <Option optionName="More" />
        <Link className="link" to="/About">
          <Option optionName="About" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
