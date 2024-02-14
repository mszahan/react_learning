import { useState } from 'react';
import { IdValue } from './types';

export function useChecked() {
    const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);
    const handleCheckedChange = (checkedId: IdValue) => () => {
        const isChecked = checkedIds.includes(checkedId);
        const newCheckIds = isChecked
            ? checkedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
            : checkedIds.concat(checkedId);
        setCheckedIds(newCheckIds);
    };

    return { handleCheckedChange, checkedIds };
}
