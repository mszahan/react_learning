import { useFetch } from "./hooks/useFetch";


function DataFetch ({ login }) {
    const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`);

    if (loading) return <h1>Loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return (
        <div className="fetch">
            <h1>Fetching data with custom hook</h1>
            <img src={data.avatar_url} alt={data.name} />
            <div className="">
                {data.login && <h3> username: {data.login} </h3>}
                {data.name && <h3> Name: {data.name} </h3>}
                
                

            </div>
        </div>
    )
}

export default DataFetch;