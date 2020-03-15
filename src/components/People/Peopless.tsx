import React from "react";
import People from "./People";
type personsProps = {
  person?: any;
  clicked?: any;
  changed?: any;
};

const persons = (props: personsProps) => {
  console.log("[Peoplesss.tsx] rendering....");
  return props.person.map((person: any, index: any) => {
    return (
      <People
        name={person.name}
        key={person.id}
        click={() => props.clicked(index)}
        changed={(event: any) => props.changed(event, person.id)}
      />
    );
  });
};

export default persons;
