import {useState} from 'react';
import {FaStar} from 'react-icons/fa';


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

// need to check this type of format
const createArray = (length) => [
    ...Array(length)
];


function Star ({selected = false, onSelect}) {
    return (
        <FaStar 
        color={selected ? 'red' : 'gray'}
        onClick={onSelect}
        />
    ) 
}

function StarRating({ totalStars = 4 }) {
    const [selectedStars, setSelectedStars] = useState(0);

    return ( 
        
        <div className="star-rating">
            {
            createArray(totalStars).map((n, i) => (
            <Star key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i+1)}
    
             />
             ))
             }
    
        <p>{selectedStars} stars out of {totalStars}</p>

        </div>
    )
}




const StateHook = () => {

    return(
        <div className="state-hook">
            <h1>Exploring useState hook</h1>
            <CheckBox/>
            <StarRating totalStars={5}/>

        </div>
    )
}

export default StateHook;