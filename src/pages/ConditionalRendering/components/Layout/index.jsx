import React from "react";

import styles from "./styles.module.scss";

export const Layout = ({ handleClick, isActive }) => {
  console.log(isActive);

  return (
    <>
      <div className={`${styles.box} ${isActive ? styles.box_fill : ""}`}></div>
      <button onClick={handleClick} className={styles.btn}>
        {isActive ? "Desactivate" : "Activate"}
      </button>

      {isActive ? <h1>I'm hidden title</h1> : null}
      {isActive && <h1>I'm hidden title</h1>}
    </>
  );
};
