"use client"
import { useState } from "react";
import styles from "./header.module.css";
import { Divide as Hamburger } from 'hamburger-react'
export default function Header() {

  const [isOpen, setOpen] = useState(false);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer} >
          <div className={styles.logoLeft}>
            <img src="https://ik.imagekit.io/euo36lugk/crystal%20rock/logo_5ptOybPuQ.png?updatedAt=1724614539965" alt="" />
          </div>
          <div className={styles.logoRight}>
            <a href="">24/7 Contact Centre</a>
            <a href="">+1 (234) 567-8900</a>
          </div>

        </div>
        <div className={styles.menuBtn}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <nav className={isOpen ? styles.openedNav : ""}>
          <ul>
            <li>What<br />We Do</li>
            <li>Who<br />we serve</li>
            <li>Where<br />we are</li>
            <li>Who<br />we are</li>
            <li>Careers<br />with us</li>
            <li>Contact<br /> us</li>
            {/*<li><span>EN</span></li>*/}
          </ul>

        </nav>
      </div>
    </>
  );
}
