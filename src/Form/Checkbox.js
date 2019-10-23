import React from "react";

const Checkbox = ({
  label,
  name,
  value,
  checked,
  classes = " form-check-input ",
  handleChange
}) => {
  return (
    <div className=" form-check">
      <input
        type="checkbox"
        id={name}
        name={name}
        className={classes}
        onChange={(e) => {
          // const f = { ...filter };
          // f.all = !f.all;
          handleChange(e);
        }}
        value={value}
        checked={checked}
      />{" "}
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
