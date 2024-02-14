import { useState, useEffect } from 'react';
import { IdValue } from '.';

type Params = {
    checkedIds?: IdValue[];
    oncheckedIdsChange?: (checkedIds: IdValue[]) => void;
};

export function useChecked({ checkedIds, oncheckedIdsChange }: Params) {
    const [resolvedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(checkedIds || []);
    const handleCheckedChange = (checkedId: IdValue) => () => {
        const isChecked = resolvedCheckedIds.includes(checkedId);
        const newCheckIds = isChecked
            ? resolvedCheckedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
            : resolvedCheckedIds.concat(checkedId);
        if (oncheckedIdsChange) {
            oncheckedIdsChange(newCheckIds);
        } else {
            setResolvedCheckedIds(newCheckIds);
        }
    };

    useEffect(() => {
        const isControlled = checkedIds !== undefined;
        if (isControlled) {
            setResolvedCheckedIds(checkedIds);
        }
    }, [checkedIds]);

    return { handleCheckedChange, resolvedCheckedIds };
}
