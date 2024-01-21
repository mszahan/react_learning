import { useReducer } from "react";


const ReducerHook = () => {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
    );

    return (
        <div className="reducer">
            <h1>Exploring useReducer Hook</h1>

            <h4> {number} </h4>
            <button 
            onClick={() => setNumber(1)}
            >increase</button>


        </div>
    )
}


export default ReducerHook;