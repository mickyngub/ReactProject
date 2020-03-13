import React from "react";

type PersonProps = {
  name?: any;
  children?: any;
  click?: any;
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I'm {Math.random()} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
