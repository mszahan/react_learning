import { useState } from "react";

const ListObj = () => {
  const [list, setList] = useState([
    { name: "sojib", id: 1, age: 29 },
    { name: "tom", id: 2, age: 30 },
    { name: "war", id: 3, age: 35 },
  ]);

  const handleClick = () => {
    setList(list.map((item) => (item.id === 1 ? { ...item, age: 35 } : item)));
  };
  return (
    <div className="container">
      <h1>Updating list of objects</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.id}. {item.name} - age: {item.age}
          </li>
        ))}
      </ul>
      <button className="btn btn-success" onClick={handleClick}>
        Update sojib's age
      </button>
    </div>
  );
};

export default ListObj;
