import { Content } from "./Content";
// import { useAppContext } from "./AppContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

// type Props = {
//     user: undefined | User;
//     permissions: undefined | string[];
// };

export function Main () {
    // const {user} = useAppContext();
    const user = useSelector(
        (state: RootState) => state.user.user
    )
    return (
        <main className="py-8">
            <h1 className="text-3xl text-center font-bold">
                Welcome
            </h1>
            <p className="mt-8 text-xl text-center">
                {user ? `Hello ${user.name}!`: "Please sign in to access"}
            </p>
            <Content/>

        </main>
    )
}