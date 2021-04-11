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
        <Link className="link" to="/Level/Flags">
          <Option optionName="Flags" />
        </Link>
        <Link className="link" to="/Level/Capitals">
          <Option optionName="Capitals" />
        </Link>
        <Link className="link" to="/Level/Currency">
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
