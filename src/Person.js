import React from "react";
import Select from "react-select";
// import Input from "./Form/Input";
import InputTextField from "./InputTextField";
import InputCheckbox from "./InputCheckbox";
import Textarea from "./Form/Textarea";
import K from "./Constants.js";

const Person = ({
  name = "",
  age = "",
  sex,
  publisher = false,
  enrolled = false,
  baptized = false,
  appointments = [],
  recommend = false,
  assignments = [],
  exemplary,
  workingOn,
  //   qualities = [],
  standing,
  familyHead = false,
  child = false,
  additional,
  handlePersonChange,
  handlePersonOptionChange,
  deletePerson
}) => {
  return (
    <tr>
      <td>
        <div className="form-group">
          <InputTextField
            label="Name"
            name="name"
            value={name}
            placeholder="John"
            required={true}
            handleChange={handlePersonChange}
          />

          <div className="">
            <InputTextField
              label="Age"
              name="age"
              type="number"
              value={age}
              placeholder="25?"
              required={true}
              handleChange={handlePersonChange}
            />
            <Select
              value={sex}
              options={K.sexes}
              placeholder="Male or female?"
              onChange={(options) => handlePersonOptionChange("sex", options)}
              // styles={{
              //   ...styles,
              //   control: (base, state) => ({
              //     ...base,
              //     boxShadow: `0 0 0 1px 'orange'`,
              //   })
              // }}
            />
          </div>
          <div className="input-group mt-3 text-right">
            <button className="btn btn-danger" onClick={deletePerson}>
              <i className="fa fa-trash" /> Delete
            </button>
          </div>
        </div>
      </td>
      <td>
        <InputCheckbox
          label="Publisher"
          name="publisher"
          checked={publisher}
          placeholder=""
          required={true}
          handleChange={handlePersonChange}
        />
        <InputCheckbox
          label="In L&M School"
          name="enrolled"
          checked={enrolled}
          placeholder=""
          required={true}
          handleChange={handlePersonChange}
        />
        <InputCheckbox
          label="Baptized"
          name="baptized"
          checked={baptized}
          placeholder=""
          required={true}
          handleChange={handlePersonChange}
        />
        <Select
          value={standing}
          options={K.standing}
          isMulti={false}
          closeMenuOnSelect={true}
          placeholder="Standing?"
          className="my-2"
          onChange={(options) => handlePersonOptionChange("standing", options)}
        />
        <InputCheckbox
          label="Family head"
          name="familyHead"
          checked={familyHead}
          placeholder=""
          required={true}
          handleChange={handlePersonChange}
        />
        <InputCheckbox
          label="Child"
          name="child"
          checked={child}
          placeholder=""
          required={true}
          handleChange={handlePersonChange}
        />
      </td>
      <td className="w-50">
        <table className="table-sm table-borderless w-100">
          <tbody>
            <tr>
              <td>
                <Select
                  value={appointments}
                  options={K.appointments}
                  isMulti={true}
                  closeMenuOnSelect={false}
                  placeholder="Appointments..."
                  onChange={(options) =>
                    handlePersonOptionChange("appointments", options)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                {appointments && appointments.length > 0 ? (
                  <InputCheckbox
                    label={"Recommend reappointment"}
                    name="recommend"
                    checked={recommend}
                    placeholder=""
                    required={true}
                    handleChange={handlePersonChange}
                  />
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <Select
                  value={assignments}
                  options={K.assignments}
                  isMulti="true"
                  closeMenuOnSelect={false}
                  placeholder="Assignments..."
                  onChange={(options) =>
                    handlePersonOptionChange("assignments", options)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Select
                  value={exemplary}
                  options={K.qualities}
                  isMulti="true"
                  closeMenuOnSelect={false}
                  placeholder="Exemplary in..."
                  onChange={(options) =>
                    handlePersonOptionChange("exemplary", options)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Select
                  value={workingOn}
                  options={K.qualities}
                  isMulti="true"
                  closeMenuOnSelect={false}
                  placeholder="Can work on..."
                  onChange={(options) =>
                    handlePersonOptionChange("workingOn", options)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Textarea
                  value={additional}
                  name="additional"
                  classes="form-control mt-2"
                  placeholder="Additional comments..."
                  handleChange={handlePersonChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default Person;
