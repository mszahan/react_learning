import { useState } from "react";

const RemoveButton = () => {
  const [list, setList] = useState(["a", "b", "c", "d"]);

  const charaters = ["a", "b", "c", "d"];

  const handleClick = (char: string) => {
    setList(list.filter((item) => char !== item));
  };

  return (
    <div className="container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {charaters.map((item) => (
          <button
            className="btn btn-primary m-2"
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RemoveButton;
