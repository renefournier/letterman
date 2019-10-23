import React from "react";
import Clipboard from 'react-clipboard.js';

const Letter = (props) => {
    const needMore = props.surname.trim().length < 2;
    const names = props.people.map((person) => {
        return person.name;
    });
    return (
        <div className="card card-body bg-light " style={{ fontSize: "125%" }}>
            {needMore ? (
                <div className="text-info" />
            ) : (
                    <div>
                        {names.length > 0 ? (
                            <div>
                                <button className="btn btn-secondary pull-right mb-4">
                                    <span class="fa fa-copy " aria-hidden="true"></span>Copy </button>

                                <p>Dear Brothers,</p>
                                <p>
                                    We are writing to introduce you to{" "}
                                    {props.people.length < 2 ? (
                                        <span>
                                            {props.people[0].name} {props.surname}.
                  </span>
                                    ) : (
                                            <span>
                                                the <strong>{props.surname}</strong> family, who are joining
                    your congregation. The {props.surname} family includes{" "}
                                                {list(names)}.
                  </span>
                                        )}
                                </p>
                                {props.people.map((person, i) => {
                                    return (
                                        <p key={i}>
                                            <strong>{person.name}</strong> is {person.age} years old
                    {person.baptized && person.publisher
                                                ? " and is a baptized publisher. "
                                                : !person.baptized && person.publisher
                                                    ? " and is an unbaptized publisher. "
                                                    : person.baptized && !person.publisher
                                                        ? " and is baptized. "
                                                        : "."}
                                            {person.standing ? (
                                                <span>
                                                    {heShe(person)} leaves our congregation{" "}
                                                    {person.standing.label.toLowerCase()}.{" "}
                                                </span>
                                            ) : (
                                                    <span />
                                                )}
                                            {person.enrolled ? (
                                                <span>
                                                    {/* {person.sex.value === "M" ? "He" : "She"} */}
                                                    {person.name} was enrolled in the Life & Ministry
                        school.{" "}
                                                </span>
                                            ) : (
                                                    <span />
                                                )}
                                            {person.appointments && person.appointments.length > 0 ? (
                                                <span>
                                                    <span>
                                                        {person.name} served as {listObj(person.appointments)}
                                                        .{" "}
                                                    </span>
                                                    {/* <ul>
                          {person.appointments.map((appointment, i) => {
                            return (
                              <li>
                                {appointment.article} {appointment.label}
                              </li>
                            );
                          })}
                        </ul> */}
                                                </span>
                                            ) : (
                                                    <span />
                                                )}
                                            {person.assignments && person.assignments.length > 0 ? (
                                                <span>
                                                    During his time in our congregation, {person.name} had
                                                    the following assignments:
                        <ul>
                                                        {person.assignments.map((assignment, i) => {
                                                            return <li>{assignment.label}</li>;
                                                        })}
                                                    </ul>
                                                </span>
                                            ) : (
                                                    <div />
                                                )}
                                            {person.exemplary && person.exemplary.length > 0 ? (
                                                <span>
                                                    {person.name} has been exemplary in:
                        <ul>
                                                        {person.exemplary.map((exemplary, i) => {
                                                            return <li>{exemplary.label}</li>;
                                                        })}
                                                    </ul>
                                                </span>
                                            ) : (
                                                    <span />
                                                )}
                                            {person.workingOn && person.workingOn.length > 0 ? (
                                                <span>
                                                    {person.workingOn.length === 1
                                                        ? "One area"
                                                        : "Some areas"}{" "}
                                                    you may wish to help {person.name} work on:{" "}
                                                    {listObj(person.workingOn)}.{" "}
                                                </span>
                                            ) : (
                                                    <span />
                                                )}
                                            {person.additional && person.additional.length > 0 ? (
                                                <span>{person.additional}</span>
                                            ) : (
                                                    <span />
                                                )}
                                        </p>
                                    );
                                })}
                            </div>
                        ) : (
                                <div />
                            )}

                        {props.concluding && props.concluding.length > 0 ? (
                            <span>{props.concluding}</span>
                        ) : (
                                <span />
                            )}
                    </div>
                )}
        </div>
    );
};

function list(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else if (arr.length === 2) {
        return arr[0] + " and " + arr[1];
    } else {
        return (
            arr.slice(0, arr.length - 1).join(", ") + " and " + arr[arr.length - 1]
        );
    }
}

function listObj(arr) {
    const values = arr.map((obj) => {
        return (obj.article ? obj.article + " " : "") + obj.label;
    });
    if (values.length === 1) {
        return values[0];
    } else if (values.length === 2) {
        return values[0] + " and " + values[1];
    } else {
        return (
            values.slice(0, values.length - 1).join(", ") +
            " and " +
            values[values.length - 1]
        );
    }
}

function heShe(person) {
    if (person.sex) {
        if (person.sex.value === "M") {
            return "He";
        } else {
            return "She";
        }
    } else {
        return person.name;
    }
}

export default Letter;
