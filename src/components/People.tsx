import React from "react";

type PersonProps = {
  name?: any;
  children?: any;
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {Math.random()} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
