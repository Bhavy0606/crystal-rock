import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer} >
            <div className={styles.logoLeft}>
                <img src="/img/logo.png" alt="" />
            </div>
            <div className={styles.logoRight}>
                <a href="">24/7 Contact Centre</a>
                <a href="">+1 (234) 567-8900</a>
            </div>
        </div>
        <nav>
            <ul>
                <li>What<br/>We Do</li>
                <li>Who<br/>we serve</li>
                <li>Where<br/>we are</li>
                <li>Who<br/>we are</li>
                <li>Careers<br/>with us</li>
                {/*<li><span>EN</span></li>*/}
            </ul>
        </nav>
      </div>
    </>
  );
}
