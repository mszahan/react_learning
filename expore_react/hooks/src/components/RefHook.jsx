import { useRef } from "react";


function ColorRef () {
    const sound = useRef();
    const color = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} sounds like ${colorVal}`);
        sound.current.value = '';
        sound.current.value = '';
    }

    return (
        <div className="ref-form">
            <form onSubmit={handleSubmit}>

                <input type="text" 
                ref={sound}
                placeholder="sound.." />

                <input type="color"
                ref={color}
                />

                <button>add</button>
            </form>
        </div>
    )
}

const RefHook = () => {
    return (
        <div className="refhook">
            <h1>exploring the useRef hook</h1>
            <ColorRef/>
        </div>
    )
}

export default RefHook;
