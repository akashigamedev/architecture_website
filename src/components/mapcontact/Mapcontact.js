import React from "react";
import Data from "../../db/about/mapcontact.json";

const MapContact = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "10%",
        marginRight: "10%",
        width: "79%",
      }}
    >
      <div style={{ width: "1060px", height: "100%" }}>
        <img src="/assets/images/11.png" />
      </div>
      <div
        style={{
          backgroundColor: "var(--clr-secondary)",
          width: "1220px",
          height: "420px",
        }}
      >
        <div style={{ marginTop: "50px", marginLeft: "50px" }}>
          <h3>Get in Touch</h3>
          <p style={{ marginRight: "150px" }}>
            Contact us today to discuss your needs and explore how we can bring
            your vision to life. We look forward to hearing from you!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "50px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "5%",
            }}
          >
            <img src="/assets/images/14.png" />
            <img src="/assets/images/13.png" />
            <img src="/assets/images/12.png" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {Data.map((iteam) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "var(--clr-primary)",
                      height: "40px",
                      padding: "8px",
                      marginLeft: "20px",
                      borderRadius: "8%",
                    }}
                  >
                    {iteam.phone}
                  </p>
                  <p
                    style={{
                      backgroundColor: "var(--clr-primary)",
                      height: "40px",
                      padding: "8px",
                      marginLeft: "20px",
                      borderRadius: "8%",
                    }}
                  >
                    {iteam.mail}
                  </p>
                  <p
                    style={{
                      backgroundColor: "var(--clr-primary)",
                      height: "40px",
                      padding: "8px",
                      marginLeft: "20px",
                      borderRadius: "8%",
                    }}
                  >
                    {iteam.address}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapContact;