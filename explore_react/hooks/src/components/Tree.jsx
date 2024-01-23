import { useContext } from "react";
import { TreesContext } from "./ContextCheck";


function Tree () {

    const { trees } = useContext(TreesContext);

    return (
        <div className="tree">
            <h4>context data</h4>
            <ul>
                {
                    trees.map((tree) => (
                        <li key={tree.id}> {tree.type} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tree;