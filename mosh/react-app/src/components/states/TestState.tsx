import { useState } from "react";

let render = 0;

const TestState = () => {
  const [isActive, setIsActive] = useState(false);
  render = render + 1;
  let num = 5;

  const handleClick = () => {
    setIsActive(true);
    alert(isActive);
    num = num + 10;
  };
  return (
    <div className="container">
      <h1>Testing States features</h1>
      <button className="btn btn-secondary" onClick={handleClick}>
        change state
      </button>
      <div>
        <p>Changes on render : {render} </p>
        <button
          className="btn btn-info"
          onClick={() => {
            render++;
            console.log(render);
          }}
        >
          increase one
        </button>
        <p>Initialize in each render should be 15 : {num} </p>
      </div>
    </div>
  );
};

export default TestState;
