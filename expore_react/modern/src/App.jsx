import './App.css';
import { createRoot } from "react-dom/client";
import TodoList from "./todos/TodoList";


const App = () => {
    return (
        <div className="App">
            <TodoList/>
        </div>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
