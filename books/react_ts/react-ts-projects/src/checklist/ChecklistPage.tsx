import { useState } from 'react';
import { Checklist, IdValue } from '.';

function ChecklistPage() {
    const [checkedId, setcheckedId] = useState<IdValue | null>(null);
    function handleCheckedIdsChange(newCheckedIds: IdValue[]) {
        const newCheckedIdArr = newCheckedIds.filter((id) => id !== checkedId);

        if (newCheckedIdArr.length === 1) {
            setcheckedId(newCheckedIdArr[0]);
        } else {
            setcheckedId(null);
        }
    }
    return (
        <div className="p-10">
            <Checklist
                data={[
                    { id: 1, name: 'Alex', role: 'Assistant' },
                    { id: 2, name: 'Reb', role: 'Dev' },
                    { id: 3, name: 'Meg', role: 'manger' },
                    { id: 4, name: 'Jen', role: 'director' },
                    { id: 5, name: 'Jo', role: 'Employee' },
                ]}
                checkedIds={checkedId === null ? [] : [checkedId]}
                oncheckedIdsChange={handleCheckedIdsChange}
                // renderItem={(item) => (
                //     <li key={item.id} className="bg-white p-4 border-b-2">
                //         <div className="tex-xl text-slate-800 pb-1">{item.name}</div>
                //         <div className="text-slate-500">{item.role}</div>
                //     </li>
                // )}
                id="id"
                primary="name"
                secondary="role"
                style={
                    {
                        // width: '300px',
                        // maxHeight: '380px',
                        // overflowY: 'auto',
                    }
                }
            />
        </div>
    );
}

export default ChecklistPage;
