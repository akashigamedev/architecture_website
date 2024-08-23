import React from "react";
import styles from "./Calculator.module.css";

export default function Calculator() {
  return (
    <div className={styles.body} >
      <h3>Calculate Price</h3>
      <div className={styles.inputs}>
      <input  type='number' placeholder="Depth" id="depth"/>
      <input type="number" placeholder="Width" id="width"/>
    <input type="number" placeholder="Floors" id="floors"/>
    <input type="number" placeholder="Building Area" id="buildingArea"/>
</div>
    <button id="calculateButton">Calculate Price</button>

    </div>
  );
}
