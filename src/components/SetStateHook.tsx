import React from "react";
import People from ".././components/People";

// type IndividualProps = {
//   name?: any;
//   children?: any;
// };
const Individual = () => {
  const [personState] = React.useState({
    person: [{ name: "Nicky" }, { name: "Mpal" }]
  });
  const [otherState] = React.useState("some other state");
  const [showPersonsState, setShowPersonsState] = React.useState(false);
  console.log(personState, otherState);

  // const switchNameHandler = () => {
  //   setPersonState({
  //     person: [{ name: "notMickykrub" }, { name: "thisIsOpal" }],
  //   });
  // };

  const switchShowHandler = () => {
    setShowPersonsState(!showPersonsState);
  };

  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        <People name={personState.person[0].name} />
        <People name={personState.person[1].name} />
      </div>
    );
  }
  return (
    <div>
      <button onClick={switchShowHandler}>SwitchNameUseState</button>
      {persons}
    </div>
  );
};

export default Individual;
