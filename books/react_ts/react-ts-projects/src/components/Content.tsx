// import { useAppContext } from "./AppContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
// type Props = {
//     permissions: undefined | string[];
// };

export function Content () {
    // const {permissions} = useAppContext();
    const permissions = useSelector(
        (state:RootState) => state.user.permissions
    )
    
    if (permissions === undefined) {
        return null
    }

    return permissions.includes('admin') ? (
        <p className="mt-4 text-center">
            Welcome Admin
        </p>

    ) : (
        <p className="mt-4 text-l text-center">
            Admin authorization required
        </p>
    );
}