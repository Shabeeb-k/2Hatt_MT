import React from "react";

const Footer = () => {
  return (
    <div
      className="footer-container mt-5"
      style={{
        background: "#FF9C5A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "48px",
        padding: "32px 0",
        color: "#fff",
      }}
    >
      {/* First yellow line */}
      <div
        style={{
          width: "2px",
          height: "48px",
          background: "#FFE16A",
          borderRadius: "1px",
          marginRight: "40 5px",
        }}
      />
      <div style={{ textAlign: "center", flex: 1 }}>
        <h1>6409</h1>
        <p>Succes Story</p>
      </div>
      {/* Second yellow line */}
      <div
        style={{
          width: "2px",
          height: "48px",
          background: "#FFE16A",
          borderRadius: "1px",
          margin: "0 16px",
        }}
      />
      <div style={{ textAlign: "center", flex: 1 }}>
        <h1>124</h1>
        <p>Expert Instructor</p>
      </div>
      {/* Third yellow line */}
      <div
        style={{
          width: "2px",
          height: "48px",
          background: "#FFE16A",
          borderRadius: "1px",
          margin: "0 16px",
        }}
      />
      <div style={{ textAlign: "center", flex: 1 }}>
        <h1>54.749</h1>
        <p>Hours Tutored</p>
      </div>
    </div>
  );
};

export default Footer;
