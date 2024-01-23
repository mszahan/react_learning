import { createContext } from "react";
import Tree from "./Tree";

export const TreesContext = createContext();

const trees = [
    {id: '1', type:'Maple'},
    {id: '2', type:'Oak'},
    {id: '3', type:'Family'},
    {id: '4', type:'Component'}
]


const ContextCheck = () => {
    return (
        <div className="context">
            <h1>Checking Context</h1>
            <TreesContext.Provider value={{trees}}>
                <Tree/>
            </TreesContext.Provider>
        </div>
    )
}

export default ContextCheck;
