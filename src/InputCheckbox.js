import React from "react";

const InputCheckbox = ({
  label,
  name,
  checked,
  value = "all",
  classes = "  ",
  handleChange
}) => {
  return (
    <div className=" ">
      <input
        type="checkbox"
        name={name}
        className={classes}
        onChange={handleChange}
        value={value}
        checked={checked}
      />{" "}
      <label className=" ">{label}</label>
    </div>
  );
};

export default InputCheckbox;
