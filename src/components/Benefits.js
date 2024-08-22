import React from "react";

export default function Benefits() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "41px" }}>
        <h2>Benefits of working with us</h2>
      </div>

      <div style={{ marginLeft: "150px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "var(--clr-secondary)",
                height: "140px",
                width: "27%",
                borderRadius: "4%",
              }}
            >
              <h4 style={{ paddingTop: "3.5rem", paddingLeft: "5.5rem" }}>
                Innovative projects
              </h4>
            </div>

            <div
              style={{
                backgroundColor: "var(--clr-secondary)",
                height: "140px",
                width: "27%",
                borderRadius: "4%",
              }}
            >
              <h4 style={{ paddingTop: "3.5rem", paddingLeft: "6.5rem" }}>
                Carrer Growth
              </h4>
            </div>

            <div
              style={{
                backgroundColor: "var(--clr-secondary)",
                height: "140px",
                width: "27%",
                borderRadius: "4%",
              }}
            >
              <h4 style={{ paddingTop: "3.5rem", paddingLeft: "2.5rem" }}>
                Collaborative Environment
              </h4>
            </div>
          </div>

          <div style={{ display: "flex", gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "var(--clr-secondary)",
                height: "140px",
                width: "27%",
                borderRadius: "4%",
              }}
            >
              <h4 style={{ paddingTop: "3.5rem", paddingLeft: "5.5rem" }}>
                Creative Freedom
              </h4>
            </div>

            <div
              style={{
                backgroundColor: "var(--clr-secondary)",
                height: "140px",
                width: "27%",
                borderRadius: "4%",
              }}
            >
              <h4 style={{ paddingTop: "3.5rem", paddingLeft: "2.5rem" }}>
                Competitive Compensation
              </h4>
            </div>

            <div
              style={{
                backgroundColor: "var(--clr-secondary)",
                height: "140px",
                width: "27%",
                borderRadius: "4%",
              }}
            >
              <h4 style={{ paddingTop: "3.5rem", paddingLeft: "5.5rem" }}>
                Work-Life Balance
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
