import {createRoot} from 'react-dom/client';
import {BiArchive} from 'react-icons/bi'


function App () {
    return(
        <div className="app">
            <h1 className='text-3xl'> <BiArchive/> Hola from app</h1>
            <h2>
                tailwindcss/forms
            </h2>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)