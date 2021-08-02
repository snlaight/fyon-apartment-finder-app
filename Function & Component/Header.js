import styles from "../styles/Home.module.css";
import React from "react";

export const Header = () => {
  return (
    <div>
      <h1
        style={{ background: "linear-gradient(to bottom, #2c3e50, #bdc3c7)" }}
        className="text-center h-32 text-white font-mono text-7xl pt-4"
      >
        APARTMENT FINDER
      </h1>
    </div>
  );
};
