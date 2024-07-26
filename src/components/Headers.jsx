import React from "react";

const Headers = () => {
  const style = {
    color: "red",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza </h1>
    </header>
  );
};

export default Headers;
