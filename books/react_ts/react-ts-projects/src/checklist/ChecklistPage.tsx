import { Checklist } from '.';

function ChecklistPage() {
    return (
        <div className="p-10">
            <Checklist
                data={[
                    { id: 1, name: 'Alex', role: 'Assistant' },
                    { id: 2, name: 'Reb', role: 'Dev' },
                ]}
                id="id"
                primary="name"
                secondary="role"
            />
        </div>
    );
}

export default ChecklistPage;
