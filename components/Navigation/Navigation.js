import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.NavigationContainer}>
      <ul className={styles.Navigation}>
        <li><spna>00</spna> Home</li>
        <li><spna>01</spna> Destination</li>
        <li><spna>02</spna> Crew</li>
        <li><spna>03</spna> Technology</li>
      </ul>
    </nav>
  );
};

export default Navigation;
