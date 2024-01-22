import { createRoot } from "react-dom/client";


const App = () => {
    return (
        <div className="App">
            <h1>Hello from React vite</h1>
        </div>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
