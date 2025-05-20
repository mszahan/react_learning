import type { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
