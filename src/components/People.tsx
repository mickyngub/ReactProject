import React from "react";

type PersonProps = {
  name?: string;
};

const Person = (props: PersonProps) => {
  return (
    <p>
      I'm {props.name} and I'm {Math.random()} years old!
    </p>
  );
};

export default Person;
