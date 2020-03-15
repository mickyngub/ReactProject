import React, { Component } from "react";
import Peoplesss from "./People/Peopless";
import Cockpit from "../components/Cockpit/Cockpit";

// import ErrorBoundary from "./ErrorBoundary";

type NewPostProps = {
  title?: any;
};

class NewPost extends Component<NewPostProps> {
  constructor(props: NewPostProps) {
    super(props);
  }

  state = {
    person: [
      { id: "6969", name: "Micky" },
      { id: "7979", name: "Opal" },
      { id: "8989", name: "Mickyengja" }
    ],
    showPersons: false
  };

  switchNameHandler = (newName: string) => {
    console.log("was clicked");
    this.setState({ person: [{ name: newName }, { name: "Opalpal" }] });
  };

  deletePersonHandler = (personIndex: any) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  };
  nameChangedHandler = (event: any, id: any) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState(
      { person: persons }

      //   {
      //   person: [
      //     { name: event.target.value },
      //     { name: event.target.value },
      //     { name: event.target.value }
      //   ]
      // }
    );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Peoplesss
          person={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );

      {
        /* <People name={this.state.person[0].name} />
          <People
            name={this.state.person[1].name}
            click={this.switchNameHandler.bind(this, "Slicky")}
            changed={this.nameChangedHandler}
          />
          <People name={this.state.person[2].name} /> */
      }
    }
    return (
      <div>
        <Cockpit title={this.props.title} clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default NewPost;
