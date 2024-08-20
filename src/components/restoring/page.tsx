import styles from "./restoring.module.css";

export default function Restoring() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <img src="/img/working.png" alt="Working Man" />
          </div>
        </div>
        <div className={styles.right}>
          <h1>On your side,<br/>with unparalleled service.</h1>
          <p>
            We’re On Side Restoration. We’ve been expertly restoring damaged
            homes and businesses in Canada since 1979. Over 1,750 of the most
            well trained, most qualified service personnel in the industry are
            employed at On Side, with 800 Technician and Trade Level
            Certifications among them. With over 15,000 pieces of specialty
            restoration equipment, and more than 1,000 emergency response
            vehicles from coast to coast, we deliver the most efficient and
            highly-skilled restoration service in Canada. 24/7, every single day
            of the year.
          </p>
          <ul>
            <li>Talk to us about:
            <ul>
            <li>Fire, Flood & Wind Damage</li>
            <li>Hazardous Materials Remediation</li>
            <li>Vandalism, Accident & Trauma Sites</li>
            <li>Residential Restoration</li>
            <li>Commercial Restoration</li>
          </ul>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
}
