import React from "react";

function Alert(props) {
  return (
   props.Alert &&  <div
      className={`alert alert-${props.Alert.type} alert-dismissible fade show`}
      role="alert"
    >
    <strong>  {props.Alert.type}</strong> : {props.Alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
