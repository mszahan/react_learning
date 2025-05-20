import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

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
    </div>
  );
}

export default App;
