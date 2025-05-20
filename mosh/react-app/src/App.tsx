import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  return (
    <div className="main">
      <ListGroup items={items} heading="List group" />
    </div>
  );
}

export default App;
