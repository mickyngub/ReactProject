import React from "react";

type PersonProps = {
  name?: any;
  children?: any;
  click?: any;
  changed?: any;
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I'm {Math.random()} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
