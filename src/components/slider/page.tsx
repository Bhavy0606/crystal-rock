import styles from "./slider.module.css";

export default function Slider() {
  return (
    <>
      <div className={styles.container}>
        <h1>
          Growing in Ontario
          <br />
          with the Acquisition of
          <br />
          Superior Restoration.
        </h1>
        <button className={styles.btnLearnMore}>
          Learn More 
          <img src="/img/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </>
  );
}
