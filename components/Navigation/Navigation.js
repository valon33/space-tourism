import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const router = useRouter();
  console.log(router.pathname == "/");
  return (
    <nav className={styles.NavigationContainer}>
      <ul className={styles.Navigation}>
        <li className={styles.NavigationLi}>
          <Link href={"/"}>
            <a className={router.pathname == "/" ? styles.ActiveLink : ""}>
              <span>00</span> Home
            </a>
          </Link>
        </li>
        <li className={styles.NavigationLi}>
          <Link href={"/destination"}>
            <a
              className={
                router.pathname == "/destination" ? styles.ActiveLink : ""
              }
            >
              <span>01</span> Destination
            </a>
          </Link>
        </li>
        <li className={styles.NavigationLi}>
          <Link href={"/crew"}>
            <a className={router.pathname == "/crew" ? styles.ActiveLink : ""}>
              <span>02</span> Crew
            </a>
          </Link>
        </li>
        <li className={styles.NavigationLi}>
          <Link href={"/technology"}>
            <a
              className={
                router.pathname == "/technology" ? styles.ActiveLink : ""
              }
            >
              <span>03</span> Technology
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
