import React from "react";
const HostedOrNot = () => {
  return (
    <div>
      <label className="radio-button">
        <input type="radio" name="example-radio" value="option1" />
        <span className="radio"></span>
        Option 1
      </label>

      <label className="radio-button">
        <input type="radio" name="example-radio" value="option2" />
        <span className="radio"></span>
        Option 2
      </label>
    </div>
  );
};

export default HostedOrNot;
