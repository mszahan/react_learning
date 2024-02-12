import { Checklist } from '.';

function ChecklistPage() {
    return (
        <div className="p-10">
            <Checklist
                data={[
                    { id: 1, name: 'Alex', role: 'Assistant' },
                    { id: 2, name: 'Reb', role: 'Dev' },
                    { id: 2, name: 'Meg', role: 'manger' },
                    { id: 2, name: 'Jen', role: 'director' },
                    { id: 2, name: 'Jo', role: 'Employee' },
                ]}
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
