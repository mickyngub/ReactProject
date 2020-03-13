import React from "react";

//import { render } from "react-dom";

type FruitLoopsProps = {
  fruit: Array<string>;
};
function FruitLoops(props: FruitLoopsProps) {
  return (
    <ul>
      {props.fruit.map((value, index) => {
        let color: string = "";
        if (value === "red") {
          color = "red";
        }
        return (
          <li key={index} style={{ color: color }}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

export default FruitLoops;
