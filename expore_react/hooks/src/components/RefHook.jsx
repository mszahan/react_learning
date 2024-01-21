import { useRef, useState } from "react";


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
            <p>uncontrolled form with useRef</p>
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


function ControlForm () {
    const [ sound, setSound]= useState();
    const [ color, setColor ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`);
        setSound('')
        setColor('#000')
    }

    return (
        <div className="ref-form">
            <p>controlled form with useState</p>
            <form onSubmit={handleSubmit}>

                <input type="text" 
                value={sound}
                onChange={e => setSound(e.target.value)}
                placeholder="sound.." />

                <input type="color"
                onChange={e => setColor(e.target.value)}
                value={color}
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
            <ControlForm/>
        </div>
    )
}

export default RefHook;
