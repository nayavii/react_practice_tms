import React from "react";

import styles from "./styles.module.scss";

export const Counter = ({
  value,
  isEven,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div className={`${styles.wrapper} ${isEven ? "" : styles.wrapper_purple}`}>
      <div className={styles.display}>
        <p className={styles.text}>{value}</p>
        <p className={styles.text}>{`${
          isEven ? "Четное" : "Нечетное"
        } число`}</p>
      </div>
      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.controlButton} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};
