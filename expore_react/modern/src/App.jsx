import './App.css';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import TodoList from "./todos/TodoList";
import store from './store';


const App = () => {
    return (
        <div className="App">
            <TodoList/>
        </div>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    
        <Provider store={store}>
            <App />
        </Provider>

        );
