import React from "react";

const ErrorPage = () => {
  return (
    <div className="container">
      <h1 style={style}>404: PAGE NOT FOUND</h1>
    </div>
  );
};

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f5f6f7",
  height: "80vh",
  color: "#219653",
};

export default ErrorPage;
