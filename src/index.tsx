import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Test from "./components/Micky";
import Header from "./components/header";
import { CustomDate } from "./components/custom-date";
import FruitLoops from "./components/fruit-loops";
import People from "./components/People";
import NewPost from "./components/State";

let fruit: Array<string> = ["yellow", "blue", "green", "pink", "red"];
// let person: [
//     { name: "Micky" },
//     { name: "Opal"}
// ]
//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Test />, document.getElementById("micky"));
ReactDOM.render(
  <div>
    <h1>Today is Thursday</h1>
    <a href="#">Click</a>
  </div>,
  document.querySelector("#micky2")
);
ReactDOM.render(
  <div>
    <Header text="Your dog stonks" />,
    <Header text="Your mom stonks" />
    <People name="Micky" />
    <People name="Opal">Aod pai Huahin</People>
    <People />
    <CustomDate />
    <FruitLoops fruit={fruit} />
    <NewPost />
    <p>Yeah man</p>
  </div>,
  document.querySelector("#micky3")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
