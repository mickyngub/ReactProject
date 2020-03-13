import * as React from "react";

type HeaderProps = {
  text: string;
};

/*const person = {
  name: "Max"
};*/
function Header(props: HeaderProps) {
  React.useEffect(() => {
    alert(document.querySelector("#myid"));
  });

  return (
    <h1 id="myid" className="App">
      {props.text}
    </h1>
  );
}

export default Header;
