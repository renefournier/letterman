import React from "react";

const Letter = (props) => {
  const needMore = props.surname.trim().length < 2;
  const names = props.people.map((person) => {
    return person.name;
  });
  return (
    <div className="letter" style={{ fontSize: "125%" }}>
      {needMore ? (
        <div className="text-info" />
      ) : (
        <div>
          <button
            id="copyButton"
            className="btn btn-secondary pull-right mb-4"
            data-clipboard-target="#letterContents"
          >
            <span className="fa fa-copy " aria-hidden="true"></span> Copy
          </button>

          {names.length > 0 ? (
            <div id="letterContents">
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
                    {parents(props.people)}
                    {children(props.people)}.
                  </span>
                )}
              </p>
              {props.people.map((person, i) => {
                return (
                  <div key={i}>
                    <p>
                      <strong>{person.name}</strong>
                      {person.familyHead ? (
                        <span>, the family head, </span>
                      ) : (
                        <span> </span>
                      )}
                      is {person.age} years old{" "}
                      {person.baptized && person.publisher
                        ? " and is a baptized publisher. "
                        : !person.baptized && person.publisher
                        ? " and is an unbaptized publisher. "
                        : person.baptized && !person.publisher
                        ? " and is baptized. "
                        : "."}
                      {person.enrolled ? (
                        <span>
                          {heShe(person)} was enrolled in the Life & Ministry
                          school.{" "}
                        </span>
                      ) : (
                        <span />
                      )}
                      {person.standing ? (
                        <span>
                          {" "}
                          {person.standing.value !== "STUN" ? (
                            <span>
                              {heShe(person)} leaves our congregation{" "}
                              <strong>
                                {person.standing.label.toLowerCase()}
                              </strong>
                              .{" "}
                            </span>
                          ) : (
                            <span>
                              {" "}
                              {heShe(person)} is an{" "}
                              <strong>
                                {person.standing.label.toLowerCase()}.{" "}
                              </strong>
                            </span>
                          )}
                        </span>
                      ) : (
                        <span />
                      )}
                      {person.appointments && person.appointments.length > 0 ? (
                        <span>
                          {person.name} served as {listObj(person.appointments)}
                          .{" "}
                          {person.recommend ? (
                            <span>
                              Our body of elders recommends that{" "}
                              {heShe(person).toLowerCase() + " "}{" "}
                              <strong> continue serving</strong> as{" "}
                              {listObj(person.appointments)}.{" "}
                            </span>
                          ) : (
                            <span>
                              We <strong>do not recommend</strong>{" "}
                              {heShe(person).toLowerCase()} continue serving as{" "}
                              {listObj(person.appointments)} for the following
                              reason(s):{" "}
                            </span>
                          )}
                        </span>
                      ) : (
                        <span />
                      )}
                    </p>
                    {person.assignments && person.assignments.length > 0 ? (
                      <span>
                        <p>
                          During {hisHer(person).toLowerCase()} time in our
                          congregation, {person.name} was approved for the
                          following assignments:
                        </p>
                        <ul>
                          {person.assignments.map((assignment, i) => {
                            return <li key={i}>{assignment.label}</li>;
                          })}
                        </ul>
                      </span>
                    ) : (
                      <span />
                    )}

                    {person.exemplary && person.exemplary.length > 0 ? (
                      <span>
                        <p>
                          {person.name} displays the following good qualities:
                        </p>
                        <ul>
                          {person.exemplary.map((exemplary, i) => {
                            return <li key={i}>{exemplary.label}</li>;
                          })}
                        </ul>
                      </span>
                    ) : (
                      <span />
                    )}
                    <p>
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
                  </div>
                );
              })}
              {props.concluding && props.concluding.length > 0 ? (
                <p>{props.concluding}</p>
              ) : (
                <span />
              )}
              <p>Warm regards,</p>
            </div>
          ) : (
            <div />
          )}

          <br />
          <br />
        </div>
      )}
    </div>
  );
};

function parents(arr) {
  // let names = [];
  // arr.forEach((person) => {
  //   if (!person.child) {
  //     names.push(person.name);
  //   }
  // });
  const people = arr.filter((person) => {
    return !person.child;
  });
  const names = people.map((person) => {
    return person.name;
  });
  return list(names);
}

function children(arr) {
  if (arr.length === 0) {
    return "";
  } else {
    // const names = arr.map((person) => {
    //   if (person.child) {
    //     return person.name;
    //   }
    // });

    const people = arr.filter((person) => {
      return person.child;
    });
    const names = people.map((person) => {
      return person.name;
    });

    if (names.length === 0) {
      return "";
    } else if (names.length === 1) {
      return ", and their child, " + names[0];
    } else {
      return ", and their children, " + list(names);
    }
  }
}

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

function hisHer(person) {
  if (person.sex) {
    if (person.sex.value === "M") {
      return "His";
    } else {
      return "Her";
    }
  } else {
    return person.name;
  }
}

export default Letter;
