import React, { Component } from "react";
import People from "./People";

class NewPost extends Component {
  state = {
    person: [{ name: "Micky" }, { name: "Opal" }]
  };

  switchNameHandler = () => {
    console.log("was clicked");
    this.setState({ person: [{ name: "Mickyngub" }, { name: "Opalpal" }] });
  };
  render() {
    return (
      <div>
        <People name={this.state.person[0].name} />
        <People
          name={this.state.person[1].name}
          click={this.switchNameHandler}
        />
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default NewPost;
