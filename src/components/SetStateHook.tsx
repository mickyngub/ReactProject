import React from "react";
import People from ".././components/People";

// type IndividualProps = {
//   name?: any;
//   children?: any;
// };
const Individual = () => {
  const [personState] = React.useState({
    person: [
      { id: "6969", name: "Nicky" },
      { id: "7979", name: "NOpal" },
      { id: "8989", name: "Nickyengja" }
    ]
  });
  const [otherState] = React.useState("some other state");
  const [showPersonsState, setShowPersonsState] = React.useState(false);
  console.log(otherState);

  // const switchNameHandler = () => {
  //   setPersonState({
  //     person: [{ name: "notMickykrub" }, { name: "thisIsOpal" }],
  //   });
  // };

  const switchShowHandler = () => {
    setShowPersonsState(!showPersonsState);
  };

  // const deletePersonHandler = (personIndex: any) => {
  //   const persons = [...personState.person];
  //   persons.splice(personIndex, 1);
  //   setPersonState({})
  // };

  const nameChangedHandler = (event: any, id: any) => {
    const personIndex = personState.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...personState.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personState.person];
    persons[personIndex] = person;

    {
      person: persons;
    }
  };
  // let persons = null;

  // if (showPersonsState) {
  //   persons = (
  //     <div>
  //       <People name={personState.person[0].name} />
  //       <People name={personState.person[1].name} />
  //     </div>
  //   );
  // }

  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        {personState.person.map(person => {
          return (
            <People
              name={person.name}
              // click={() => deletePersonHandler(index)}
              key={person.id}
              changed={(event: any) => nameChangedHandler(event, person.id)}
            />
          );
        })}
        {/* <People name={this.state.person[0].name} />
        <People
          name={this.state.person[1].name}
          click={this.switchNameHandler.bind(this, "Slicky")}
          changed={this.nameChangedHandler}
        />
        <People name={this.state.person[2].name} /> */}
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
