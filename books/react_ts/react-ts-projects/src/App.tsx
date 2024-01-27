// import './App.css';
import Alert from './components/Alert';
import { PersonScore } from './components/hooks/PersonScore';

function App() {
  return (
    <div className="App">
      <Alert heading="Success" closable={true}>
        Here is the children
      </Alert>
      <PersonScore />
    </div>
  );
}

export default App;
