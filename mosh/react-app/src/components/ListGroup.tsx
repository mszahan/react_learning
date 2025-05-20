// import type { MouseEvent } from "react";
import { useState } from "react";

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

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List group</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
