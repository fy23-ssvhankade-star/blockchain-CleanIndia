import React from "react";

export default function Alert({ type = "info", message, className = "" }) {
  return (
    <div className={`badge badge-${type} ${className}`} style={{ width: "100%", padding: "1rem", borderRadius: "8px", margin: "1rem 0" }}>
      {message}
    </div>
  );
}
