import ListGroup from "./components/ListGroup";

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
    </div>
  );
}

export default App;
