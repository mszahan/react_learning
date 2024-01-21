import { useDeferredValue, useReducer, useState } from "react";



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



// using the dispathc in useReducer

const initialState = {
    message: 'hi'
}

function reducer (state, action) {
    switch (action.type) {
        case 'yell':
            return {
                message: `HEY...... previous I said ${state.message}`
            }
        
        case 'greetings':
            return {
                message: `Hello dear`
            }
        
        case 'leave':
            return {
                message:`Bye dear`
            }
        
        default:
            return state

    }
}

function Welcome () {
    const [state, dispatch] = useReducer( reducer, initialState)

    return (
        <div className="welcome">
            <h4>Greetings messages</h4>
            <p>{state.message}</p>
            <button
            onClick={()=> dispatch({type:'yell'})}
            >yell
            </button>
            {'   '}
            <button
            onClick={()=> dispatch({type:'greetings'})}
            >Greet
            </button>
            {'   '}
            <button
            onClick={()=> dispatch({type:'leave'})}
            >leave
            </button>
        </div>
    )
}


const ReducerHook = () => {
    return (
        <div className="reducer-hook">
            <h1>Exploring useReducer Hook</h1>
            <Increament/>
            <CBox/>
            <Welcome/>
        </div>
    )
}


export default ReducerHook;