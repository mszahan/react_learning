import { useRouteError } from "react-router-dom";
import { Header } from "../components/Header";

export function ErrorPage () {
    const error = useRouteError();
    return (
        <>
            <Header/>
            <div className="text-center p-5 text-xl">
                <h1 className="text-xl text-slate-900">
                    Something went wrong..
                </h1>
                {
                    isError(error) && (
                        <p className="text-base text-slate-700">
                            {error.statusText}
                        </p>
                    )
                }

            </div>
        </>
    )
}

function isError (error: any) : error is {
    statusText: string
} {
    return 'statusText' in error;
}