import React from "react";

type cockpitProps = {
  title?: any;
  clicked?: any;
};
const cockpit = (props: cockpitProps) => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div>
      <h1>No! this is patrick</h1>
      <button style={style} onClick={props.clicked}>
        {props.title}
      </button>
    </div>
  );
};

export default cockpit;
