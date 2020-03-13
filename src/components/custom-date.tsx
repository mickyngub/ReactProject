import React from "react";

function CustomDate() {
  let [date, setDate] = React.useState("");

  let getDate = () => {
    setDate(new Date().toTimeString());
    alert("yeah");
  };
  return (
    <div>
      {date}
      <button onClick={getDate}>Get the Date</button>
    </div>
  );
}

export { CustomDate };
