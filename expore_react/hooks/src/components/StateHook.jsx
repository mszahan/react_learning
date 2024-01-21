import {useState} from 'react';


const CheckBox = () => {
    const [checked, setChecked] = useState(false);

    return(
        <div className="checkbox">
            <input type="checkbox" 
            onClick={() => setChecked(!checked)}
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


const StateHook = () => {

    return(
        <div className="state-hook">
            <h1>Exploring useState hook</h1>
            <CheckBox/>
        </div>
    )
}

export default StateHook;