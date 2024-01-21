import {createRoot} from 'react-dom/client';
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';


const App = () => {
    return (
        <div className="App">
            <h1>Hola from the react</h1>
            <StateHook/>
            <EffectHook/>
        </div>
    )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);