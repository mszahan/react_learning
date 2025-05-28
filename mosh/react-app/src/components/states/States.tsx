import AddButton from "./AddButton";
import AddDuster from "./AddDuster";
import EditButton from "./EditButton";
import ListObj from "./ListObj";
import ObjUpdate from "./ObjUpdate";
import RemoveButton from "./RemoveButton";
import TestState from "./TestState";

const States = () => {
  return (
    <div className="container">
      <AddButton />
      <EditButton />
      <RemoveButton />
      <AddDuster />
      <ListObj />
      <ObjUpdate />
      <TestState />
    </div>
  );
};

export default States;
