import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { IdValue } from '.';
import { useChecked } from './useChecked';

type Props<Data> = {
    data: Data[];
    id: keyof Data;
    primary: keyof Data;
    secondary: keyof Data;
    renderItem?: (item: Data) => ReactNode;
    checkedIds?: IdValue[];
    oncheckedIdsChange?: (checkedIds: IdValue[]) => void;
} & ComponentPropsWithoutRef<'ul'>;

export function Checklist<Data>({
    data,
    id,
    primary,
    secondary,
    renderItem,
    checkedIds,
    oncheckedIdsChange,
    ...urlProps
}: Props<Data>) {
    const { resolvedCheckedIds, handleCheckedChange } = useChecked({
        checkedIds,
        oncheckedIdsChange,
    });
    // const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);
    // const handleCheckChange = (checkedId: IdValue) => () => {
    //     const isChecked = checkedIds.includes(checkedId);
    //     const newCheckedIds = isChecked
    //         ? checkedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
    //         : checkedIds.concat(checkedId);
    //     setCheckedIds(newCheckedIds);
    // };

    return (
        <ul className="bg-gray-300 rounded p-10" {...urlProps}>
            {data.map((item) => {
                if (renderItem) {
                    return renderItem(item);
                }

                const idValue = item[id] as unknown;
                if (typeof idValue !== 'string' && typeof idValue !== 'number') {
                    return null;
                }

                const primaryText = item[primary] as unknown;
                if (typeof primaryText !== 'string') {
                    return null;
                }

                const secondaryText = item[secondary] as unknown;

                return (
                    <li key={idValue} className="bg-white p-6 shadow rounded mb-4 last:mb-0">
                        <label className="flex item-center">
                            <input
                                type="checkbox"
                                checked={resolvedCheckedIds.includes(idValue)}
                                onChange={handleCheckedChange(idValue)}
                            />
                            <div className="ml-2">
                                <div className="text-xl text-gray-800 pb-1">{primaryText}</div>
                                {typeof secondaryText === 'string' && (
                                    <div className="text-sm text-gray-500">{secondaryText}</div>
                                )}
                            </div>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}
