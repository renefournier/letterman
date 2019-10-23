import React from "react";

const InputTextField = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  classes = "form-control ",
  required,
  handleChange
}) => (
  <div>
    <div className="form-group">
      <div className="input-group mb-3">
        {label && (
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              {label}
            </span>
          </div>
        )}
        <input
          className={classes}
          type={type}
          id={name}
          name={name}
          value={value}
          required={required}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
);

export default InputTextField;
