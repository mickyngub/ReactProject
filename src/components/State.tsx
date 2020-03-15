import React, { Component } from "react";
import People from "./People";
import ErrorBoundary from "./ErrorBoundary";

class NewPost extends Component {
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <People
                  name={person.name}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event: any) =>
                    this.nameChangedHandler(event, person.id)
                  }
                />
              </ErrorBoundary>
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
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default NewPost;
