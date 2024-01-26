// import './App.css';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <Alert heading="heading from props" closable={true}>
        Here is the children
      </Alert>
    </div>
  );
}

export default App;
