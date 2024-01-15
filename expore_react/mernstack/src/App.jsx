import './App.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';



const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div id="page-body">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/articles' element={<ArticleListPage/>}/>
                        <Route path='/articles/:articleId' element={<ArticlePage/>}/>
                    </Routes>                   
                </div>
            </div>
        </BrowserRouter>
    )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)