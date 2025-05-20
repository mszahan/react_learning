import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div className="main">
      <ListGroup
        items={items}
        heading="List group"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <h1>hello children</h1>
      </Alert>
    </div>
  );
}

export default App;
