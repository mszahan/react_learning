import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import RemoveButton from "./components/states/RemoveButton";
import AddButton from "./components/states/AddButton";
import EditButton from "./components/states/EditButton";
import TestState from "./components/states/TestState";
import ObjUpdate from "./components/states/ObjUpdate";
import ListObj from "./components/states/ListObj";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => console.log(item);
  const [viewAlert, setViewAlert] = useState(false);
  return (
    <div className="main">
      <ListGroup
        items={items}
        heading="List group"
        onSelectItem={handleSelectItem}
      />
      {/* <Alert>
        <h1>hello children</h1>
      </Alert> */}

      {viewAlert && (
        <Alert onClose={() => setViewAlert(false)}>Button clicked</Alert>
      )}
      <Button onClick={() => setViewAlert(true)}>Open Alert</Button>
      <div>
        <Like onClick={() => console.log("clicked")} />
      </div>
      <RemoveButton />
      <AddButton />
      <EditButton />
      <TestState />
      <ObjUpdate />
      <ListObj />
    </div>
  );
}

export default App;
