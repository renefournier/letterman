import React from "react";

const Input = ({
  label = false,
  name,
  type = "text",
  value = "",
  placeholder = "",
  classes = "form-control ",
  autofocus = false,
  helpText,
  error,
  handleChange
}) => {
  return (
    <React.Fragment>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        autoFocus={autofocus}
        type={type}
        className={classes}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {helpText && <small className="form-text text-muted">{helpText}</small>}
      {error && (
        <div className="">
          <div className="invalid-feedback d-block">{error}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Input;
