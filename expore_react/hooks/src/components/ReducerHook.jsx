import { useReducer, useState } from "react";



function Increament () {

    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
    );


    return (
        <div className="reducer">
            <h4> {number} </h4>
            <button 
            onClick={() => setNumber(1)}
            >increase 1</button>

            <button
            onClick={() => setNumber(5)}
            >increase 5</button>

            <button onClick={() => setNumber(-2)}>
                reduce 2
            </button>
        </div>
    )
}



function CBox () {
    // const [checked, setChecked] = useState(false);
    const [checked, toggle] = useReducer(
        checked => !checked,
        false
    )

    return(
        <div className="checkbox">
            <input type="checkbox" 
            onClick={toggle}
            value={checked}
            />
                {
                    checked
                    ? <p>Checked </p>
                    : <p>Unchecked</p>
                }
        </div>
    )
}




const ReducerHook = () => {
    return (
        <div className="reducer-hook">
            <h1>Exploring useReducer Hook</h1>
            <Increament/>
            <CBox/>
        </div>
    )
}


export default ReducerHook;