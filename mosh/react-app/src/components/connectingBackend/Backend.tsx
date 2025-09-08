import { useState } from "react";
import EffectBasic from "./EffectBasic";
import EffectDependency from "./EffectDependency";

const Backend = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="backend">
      <h1>Connecting to backend here</h1>
      <EffectBasic />
      <div className="dependency">
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="clothing">Clothing</option>
          <option value="household">Household</option>
        </select>
        <EffectDependency category={category} />
      </div>
    </div>
  );
};

export default Backend;
