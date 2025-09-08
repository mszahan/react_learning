import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import ExpandibleText from "./components/ExpandibleText";
import States from "./components/states/States";
import Forms from "./components/forms/Forms";
import ExpenseTracker from "./components/expense/ExpenseTracker";
import Backend from "./components/connectingBackend/Backend";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => console.log(item);
  const [viewAlert, setViewAlert] = useState(false);
  return (
    <div className="container mb-5">
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
      <States />
      <ExpandibleText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Exercitationem, esse minima earum recusandae quae veniam atque sunt
        nostrum accusamus nisi maxime minus perspiciatis voluptatem ex tenetur
        debitis, neque nihil. Laboriosam incidunt nisi beatae repellendus eaque
        omnis nobis ex nihil, accusamus similique ducimus sunt fugit eum dolorum
        voluptates animi, corporis vitae?
      </ExpandibleText>
      <Forms />
      <ExpenseTracker />
      <Backend />
    </div>
  );
}

export default App;
