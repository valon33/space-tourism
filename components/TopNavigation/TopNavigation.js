import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
  return (
    <div className={styles.TopNavigation}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default TopNavigation;
