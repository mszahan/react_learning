export function HomePage() {
    return (
        <div className="tex-center p-5 text-xl">
            <h1 className="text-xl text-slate-900 font-bold">
                Welcome to React tools.
            </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, excepturi, 
                sed ea qui eum harum aliquid odit consequuntur sint maxime ipsam
                 veritatis dolorem, mollitia ex.
            </p>
            <p>
                {import.meta.env.VITE_API_URL}
            </p>
        </div>
    )
}