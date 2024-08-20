import styles from "./facilities.module.css";

export default function Facilities() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.facilitiesContainer}>
          <h1>Our Facilities and Locations</h1>
          <p>
            All of our locations coast to coast are fully equipped to provide a
            wide range of specialty in-house services. Our clients feel
            confident knowing that their belongings are processed, tracked and
            monitored by us.
          </p>
        </div>
      </div>
    </>
  );
}
