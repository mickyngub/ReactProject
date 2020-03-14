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

  return (
    <div>
      <button onClick={switchShowHandler}>SwitchNameUseState</button>
      {showPersonsState ? (
        <div>
          <People name={personState.person[0].name} />
          <People name={personState.person[1].name} />
        </div>
      ) : null}
    </div>
  );
};

export default Individual;
