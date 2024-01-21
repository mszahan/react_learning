import { useState, useEffect } from "react";



function ChangeTitle () {
    const [name, setName] = useState('Alex')
    const [admin, setAdmin] = useState(false)

    useEffect (() => {
        document.title = `Celebrate ${name}`
    }, [name])

    useEffect( () => {
        console.log(`${admin ? 'Adming ' : 'not Admin'}`)
    }, [admin])

    return (
        <section>
            <h1>Exploring the useEffect hook</h1>
            <p>Congratulations {name}</p>
            <button
            onClick={()=> setName('Anna')}
            >change the winner</button>

            <p>
                {
                    admin ? 'Logged in' : 'not logged in'
                }
            </p>

            <button
            onClick={() => setAdmin(!admin)}
            
            > {admin ? 'Logout' : 'Login'} </button>
        </section>
    )
}


function GitHub () {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
        .then(response => response.json())
        .then(setData);
    }, [])


    if (data) {  

        return (
            <div className="github">
                <h4>list of GitHub users</h4>
                <ul>
                    {
                        data.map((user) => (
                            <li key={user.id}> {user.login} </li>
                        ) )
                    }
                </ul>
                <button
                onClick={() => setData([])}
                >Remove data</button>
            </div>
        )
    }
}




const EffectHook = () => {
    
    return (
        <div className="effect">
            <ChangeTitle/>
            <GitHub/>
        </div>
    )
}

export default EffectHook;