import React from "react";
import "./toggle-switch.styles.css";
  
const ToggleSwitch = ({ label, toggleLight }) => {
  return (
    <div className="container">
      <div className="mode-label">
        {label}{" "}
      </div>
      <div className="toggle-switch">
        <input 
            type="checkbox" 
            className="checkbox" 
            name={label} 
            id={label} 
            onClick={() => {
            toggleLight();
            }}
            />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;