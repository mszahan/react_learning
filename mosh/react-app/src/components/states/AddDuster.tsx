import { useState } from "react";

const AddDuster = () => {
  const [obj, setObj] = useState({
    name: "hello world",
    numberOfChapter: 3,
    tools: ["pen", "pencil", "Ruler"],
  });

  const handleDusterOnly = () => {
    setObj({ ...obj, tools: [...obj.tools, "duster"] });
  };

  const removePencil = () => {
    setObj({
      ...obj,
      tools: [
        ...obj.tools.map((item) => (item === "pencil" ? "duster" : item)),
      ],
    });
  };
  return (
    <div className="container">
      <p>Name: {obj.name}</p>
      <p>Chapters: {obj.numberOfChapter}</p>
      <ul>
        {obj.tools.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-info m-2" onClick={handleDusterOnly}>
        add duster
      </button>
      <button className="btn btn-info m-2" onClick={removePencil}>
        Remove pencil add duster
      </button>
    </div>
  );
};

export default AddDuster;
