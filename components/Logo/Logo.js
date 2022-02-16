import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img src="/shared/logo.svg" alt="Logo" className={styles.Logo} />
    </div>
  );
};

export default Logo;
