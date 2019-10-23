import React from "react";

const Select = ({
  name = "another-select",
  classes = "custom-select ",
  options,
  value,
  onChange
}) => {
  return (
    <div className="input-group">
      <select className={classes} name={name} value={value} onChange={onChange}>
        <optgroup label={options.length + " accounts"}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </optgroup>
      </select>
    </div>
  );
};

export default Select;
