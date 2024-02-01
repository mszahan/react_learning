import { useAppContext } from "./AppContext";

// type Props = {
//     permissions: undefined | string[];
// };

export function Content () {
    const {permissions} = useAppContext();
    
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