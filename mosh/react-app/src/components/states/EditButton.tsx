import { useState } from "react";

const EditButton = () => {
  const [list, setList] = useState(["a", "b", "c", "d"]);

  const handleClick = (remove: string, add: string) => {
    setList(list.map((item) => (item === remove ? add : item)));
  };

  return (
    <div className="container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleClick("a", "b")}
        >
          a to b
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleClick("c", "d")}
        >
          c to d
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleClick("d", "a")}
        >
          d to a
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleClick("b", "a")}
        >
          b to a
        </button>
      </div>
    </div>
  );
};

export default EditButton;
