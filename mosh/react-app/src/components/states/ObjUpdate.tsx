import { useState } from "react";

const ObjUpdate = () => {
  const [normal, setNormal] = useState({ name: "sojib", age: 29 });
  const [nested, setNested] = useState({
    name: "sojib",
    address: {
      village: "Sarupnagar",
      holding: 234,
    },
  });

  const handleNormal = () => {
    setNormal({ ...normal, age: 35 });
  };

  const handleNested = () => {
    setNested({ ...nested, address: { ...nested.address, holding: 1000 } });
  };

  return (
    <div className="container">
      <div className="normal">
        <p>Name: {normal.name}</p>
        <p>Age: {normal.age}</p>
        <button className="btn btn-info" onClick={handleNormal}>
          Update Age
        </button>
      </div>

      <div className="nested">
        <p>Name: {nested.name}</p>
        <p>
          Address: {nested.address.village} - {nested.address.holding}
        </p>
        <button className="btn btn-info" onClick={handleNested}>
          Update Holding
        </button>
      </div>
    </div>
  );
};

export default ObjUpdate;
