import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="m-5">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
