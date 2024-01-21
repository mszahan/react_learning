import {createRoot} from 'react-dom/client';
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';
import ReducerHook from './components/ReducerHook';


const App = () => {
    return (
        <div className="App">
            <h1>Hola from the react</h1>
            <StateHook/>
            <EffectHook/>
            <ReducerHook/>
        </div>
    )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);