import { useEffect, useState } from "react";
import popupStyles from "./Popup.module.css";
import PropTypes from "prop-types";
import CardComp from "../CardComp";

const Popup = (props) => {
  const data = {
    object: {
      id: "hgadfhdfs",
      title: "Lorem",
      imageUrl: "http://wwww.image.com",
      createdAt: "03-12-2023-123",
      updatedAt: "03-12-2023-123",
    },
  };

  return (
    <div
      style={{
        visibility: props.show ? "visible" : "hidden",
        opacity: props.show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={`${popupStyles.popup} `}>
        <h2>{props.name}</h2>
        <span
          className={popupStyles.close}
          onClick={() => {
            props.onClose();
          }}
        >
          &times;
        </span>
        <div className={popupStyles.content}>
          <div className="d-flex justify-content-center">
            <div className={`bg-dark text-white ${popupStyles.metadata}`}>
              {Object.keys(data.object).map((key, i) => (
                <p key={i} className="bg-light text-dark ">
                  <span>{key} </span>:<span>{data.object[key]}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  // title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Popup;
