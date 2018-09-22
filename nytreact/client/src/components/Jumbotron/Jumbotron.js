import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    // style={{ height: 300, clear: "both", paddingTop: 230, textAlign: "center" }}
    className="jumbotron banner"
  >
    {children}
  </div>
);

export default Jumbotron;