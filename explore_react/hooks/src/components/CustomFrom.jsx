import { useInput } from "./hooks/useInput";



function CustomForm () {

    const [titleProps, resetTitle] = useInput('');
    const [ colorProps, resetColor ] = useInput('#000');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${titleProps.value} sounds like ${colorProps.value}`);
        resetColor();
        resetTitle();
    }

    return (
        <div className="ref-form">
            <h1>Exploring custom hook</h1>
            <p>controlled form with custom hook</p>
            <form onSubmit={handleSubmit}>

                <input type="text" 
                {...titleProps}
                placeholder="sound.." />

                <input type="color"
                {...colorProps}
                />

                <button>add</button>
            </form>
        </div>
    )
}

export default CustomForm;