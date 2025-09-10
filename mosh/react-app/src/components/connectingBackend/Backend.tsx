import { useState } from "react";
import EffectBasic from "./EffectBasic";
import EffectDependency from "./EffectDependency";
import FetchingData from "./FetchingData";
import AsyncFetching from "./AsyncFetching";
import CancelFetch from "./CancelFetch";

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
        <FetchingData />
        <AsyncFetching />
        <CancelFetch />
      </div>
    </div>
  );
};

export default Backend;
