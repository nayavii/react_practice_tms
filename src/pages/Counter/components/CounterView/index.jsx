import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const CounterView = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>{counterValue}</div>
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

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func,
  handleReset: PropTypes.func,
  handleDecrement: PropTypes.func,
};
