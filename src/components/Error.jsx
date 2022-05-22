import React from "react";
import "../styles.css";
function Error(props) {
  return (
    <div className="error" role="alert">
      {props.message}
    </div>
  );
}

export default Error;
