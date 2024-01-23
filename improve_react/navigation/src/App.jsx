import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Header from "./components/Header";

// import Home from "./components/HomeHome";
// import About from "./About";
// import Categories from "./Categories";
// import Category from "./Category";
// import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
        </Route>
        <Route index element={<h3>Select a category to see the content</h3>}/>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;