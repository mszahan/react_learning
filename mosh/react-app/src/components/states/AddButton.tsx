import { useState } from "react";

const AddButton = () => {
  const chars = ["a", "b", "c", "d", "e"];

  const [list, setList] = useState<string[]>([]);

  const handleClick = (item: string) => {
    if (list.includes(item)) {
      alert(`${item} already in the list`);
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className="container">
      {list.length === 0 && <p>No value added yet.</p>}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="">
        {chars.map((item) => (
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

export default AddButton;
