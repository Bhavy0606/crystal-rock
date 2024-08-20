import styles from "../footer.module.css";

export default function NavLinks() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.learnMore}>
          <p>
            At On Side, we take sustainability seriously throughout our entire
            organization. &nbsp;
            <span>Learn more</span>
          </p>
        </div>

        <div className={styles.footerContainer}>
          <nav>
            <ul>
              <li>Privacy</li>
              <li>ACCESSIBILITY</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className={styles.socials}>
            <img src="/img/twitter.svg" alt="Twitter" />
            <img src="/img/Facebook.svg" alt="Facebook" />
            <img src="/img/Linkedin.svg" alt="Linkedin" />
          </div>
          <div className={styles.copyrights}>
            © 2024 On Crystal Rock Restoration & Renovation. All Rights Reserved.
          </div>
        </div>
      </div>
      
    </>
  );
}