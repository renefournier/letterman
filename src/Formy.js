import React, { Component } from "react";
import Input from "./Form/Input";
import Textarea from "./Form/Textarea";
import Person from "./Person";
import Letter from "./Letter";
import K from "./Constants.js";
import Clipboard from "clipboard";

class Formy extends Component {
  state = {
    // surname: "Smith",
    // people: K.samplePeople,
    // concluding:
    //   "The Smith family will be a welcome addition to your congregation."
    surname: "",
    people: [],
    concluding: ""
  };

  personDefault = {
    id: String(Math.random() * 10000000),
    name: ""
  };

  componentDidMount() {
    new Clipboard("#copyButton", {
      target: () => document.getElementById("letterContents")
    });
  }

  submitForm = (event) => { };

  handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    // console.log(name, value);
    this.setState({ [name]: value });
  };

  handleOptionChange = (name, options) => {
    // console.log(name, options);
    // console.log(`Option selected:`, options);
    this.setState({ [name]: options });
  };

  handlePersonChange = (index, e) => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    // console.log(index, name, value);
    let people = this.state.people;
    people[index][name] = value;
    // console.log(people[index]);
    this.setState({ people: people });

    // event.preventDefault();
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
  };

  handlePersonOptionChange = (index, name, options) => {
    let newOptions = options;
    if (Array.isArray(newOptions)) {
      // console.log(`Option selected:`, options);
      // this.setState({ [name]: options });
      const all = options.filter((option) => option.value === "ALL");
      //   console.log(all);
      // alert("a");
      const none = options.filter((option) => option.value === "NONE");
      //   console.log(none);
      // alert("b");
      // console.log(all.length, none.length);
      if (all && all.length > 0) {
        newOptions = K[name].slice(2);
      }
      if (none && none.length > 0) {
        newOptions = [];
      }
    }
    // console.log(newOptions);
    const people = this.state.people;
    people[index][name] = newOptions;
    this.setState({ people: people });
  };

  addPerson = (event) => {
    event.preventDefault();
    // console.log("add+++");
    const people = this.state.people;
    let person = JSON.parse(JSON.stringify(this.personDefault));
    person.id = String(Math.round(Math.random() * 10000000));
    people.push(person);
    this.setState({
      people: people
    });
    // console.log(this.state.people.length);
  };

  deletePerson = (index) => {
    const people = this.state.people.filter((person, i) => i !== index);
    console.log(people);
    this.setState({ people: people });
    console.log(this.state.people.length);
  };

  // copyToClipboard = () => {
  //   // Clipboard
  //   console.log(new Date());
  //   // var copyText = document.getElementById('letterContents');
  //   // console.log(copyText);
  //   // copyText.select();

  //   // /* Copy the text inside the text field */
  //   // document.execCommand("copy");

  // }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <div className="input-group input-group input-group-lg ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Surname
                </span>
              </div>

              <Input
                name="surname"
                value={this.state.surname}
                placeholder="Smith"
                required={true}
                handleChange={this.handleChange}
              />
            </div>
            <div>
              <div className="input-group input-group mt-3 ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Comments
                  </span>
                </div>
                <Textarea
                  name="concluding"
                  value={this.state.concluding}
                  placeholder={
                    "They are a nice family who will benefit from..."
                  }
                  required={true}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mb-0">
              {/* <button
                className="btn btn-info btn-lg "
                name="addPerson"
                id="addPerson"
                onClick={this.addPerson}
              >
                <i className="fa fa-plus" /> Add person
              </button> */}
            </div>
          </div>
        </div>

        <div>
          <table className="table mt-3">
            <thead className="">
              <tr>
                <th colSpan="2">Person</th>
                <th className="text-right">
                  <button
                    className="btn btn-info btnd-lg "
                    name="addPerson"
                    id="addPerson"
                    onClick={this.addPerson}
                  >
                    <i className="fa fa-plus" /> Add person
                  </button>
                </th>
              </tr>
            </thead>
            {this.state.people.length > 0 ? (
              <tbody>
                {this.state.people.map((person, i) => {
                  return (
                    <Person
                      key={person.id}
                      {...person}
                      handlePersonChange={(event) =>
                        this.handlePersonChange(i, event)
                      }
                      handlePersonOptionChange={(name, options) =>
                        this.handlePersonOptionChange(i, name, options)
                      }
                      deletePerson={() => this.deletePerson(i)}
                    />
                  );
                })}
              </tbody>
            ) : (
                <tbody />
              )}
          </table>

          {this.state.people.length > 0 ? (
            <Letter {...this.state} />
          ) : (
              <span></span>
            )}
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Formy;
