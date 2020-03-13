import React from "react";
import "./People.css";
type PersonProps = {
  name?: any;
  children?: any;
  click?: any;
  changed?: any;
};

const Person = (props: PersonProps) => {
  return (
    <div className="People">
      <p onClick={props.click}>
        I'm {props.name} and I'm {Math.random()} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
