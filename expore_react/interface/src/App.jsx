import {createRoot} from 'react-dom/client';
import {BiArchive} from 'react-icons/bi'


function App () {
    return(
        <div className="app">
            <h1> <BiArchive/> Hola from app</h1>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)