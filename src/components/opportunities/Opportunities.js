import React from "react";
import data from "../../db/career/oppor.json";
import styles from "./Opportunities.module.css";

export default function Opportunites() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <h2
        style={{ textAlign: "center", marginTop: "80px", marginBottom: "41px" }}
      >
        Career Opportunities
      </h2>
      <div className={styles.opSection}>
        {data.map((item) => {
          return (
            <div
              className={styles.opCard}
              style={{ width: "85%", borderRadius: "3%" }}
            >
              <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                <div
                  style={{
                    borderBottom: "solid",
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div style={{ width: "300px" }}>
                    <h4>{item.position}</h4>
                    <p>{item.duration}</p>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "30px",
                      marginLeft: "150px",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <img src={item.image} />
                  </div>
                </div>

                <p>{item.description}</p>
                <p>{item.salary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
