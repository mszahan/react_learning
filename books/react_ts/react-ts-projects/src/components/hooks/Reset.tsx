import { memo } from "react";

type Props = {
    onClick: () => void;
};

export const Reset = memo (
    ({onClick}: Props) => {
        console.log('render reset');
        return <button onClick={onClick}>Reset</button>
    }
) 

Reset.displayName = 'Reset';