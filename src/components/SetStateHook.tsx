import React from "react";
import People from ".././components/People";

// type IndividualProps = {
//   name?: any;
//   children?: any;
// };
const Individual = () => {
  const [personState, setPersonState] = React.useState({
    person: [{ name: "Nicky" }, { name: "Mpal" }]
  });
  const [otherState] = React.useState("some other state");
  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      person: [{ name: "notMickykrub" }, { name: "thisIsOpal" }]
    });
  };

  return (
    <div>
      <button onClick={switchNameHandler}>SwitchNameUseState</button>
      <People name={personState.person[0].name} />
      <People name={personState.person[1].name} />
    </div>
  );
};

export default Individual;
