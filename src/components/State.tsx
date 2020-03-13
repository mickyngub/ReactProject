import React, { Component } from "react";
import People from "./People";

class NewPost extends Component {
  state = {
    person: [{ name: "Micky" }, { name: "Opal" }]
  };

  switchNameHandler = (newName: string) => {
    console.log("was clicked");
    this.setState({ person: [{ name: newName }, { name: "Opalpal" }] });
  };

  nameChangedHandler = (event: any) => {
    this.setState({
      person: [{ name: event.target.value }, { name: "Opalpal" }]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div>
        <People name={this.state.person[0].name} />
        <People
          name={this.state.person[1].name}
          click={this.switchNameHandler.bind(this, "Slicky")}
          changed={this.nameChangedHandler}
        />
        <button
          style={style}
          onClick={() => this.switchNameHandler("SuperMicky")}
        >
          Switch Name
        </button>
      </div>
    );
  }
}

export default NewPost;
