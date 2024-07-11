import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Layout from "./components/layout/Layout";
import Container from "./components/container/Container";

function App() {
  return (
    <div className="m-5">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/container" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
