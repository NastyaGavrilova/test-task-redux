import React from "react";
import success from "../../../assets/success.svg";
import "../_postUser.scss";
const SuccessRegistered = () => {
  return (
    <div className="c-post-user__success">
      <img
        className="c-post-user__success-img"
        src={success}
        alt="user-succes-register"
      ></img>
    </div>
  );
};

export default SuccessRegistered;
