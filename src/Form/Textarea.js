import React from "react";

const Textarea = ({
    label = false,
    name,
    type = "text",
    value = "",
    placeholder = "",
    classes = "form-control ",
    rows = 4,
    autofocus = false,
    helpText,
    error,
    handleChange
}) => {
    return (
        <React.Fragment>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                autoFocus={autofocus}
                type={type}
                className={classes}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                rows={rows}
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

export default Textarea;
