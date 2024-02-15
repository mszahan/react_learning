import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Checklist } from './Checklist';

test('should render correct list items when data specified', () => {
    render(
        <Checklist
            data={[{ id: 1, name: 'lucy', role: 'Manager' }]}
            id="id"
            primary="name"
            secondary="role"
        />,
    );
    expect(screen.queryByText('Lucy')).toBeNull();
});

test('should render correct list items when renderItem specified', () => {
    render(
        <Checklist
            data={[{ id: 1, name: 'lucy', role: 'Manager' }]}
            id="id"
            primary="name"
            secondary="role"
            renderItem={(item) => (
                <li key={item.id}>
                    {item.name} - {item.role}
                </li>
            )}
        />,
    );
    expect(screen.queryByText('Lucy - Manager')).toBeNull();
});

// test('Should check items when cliked', async () => {
//     const user = userEvent.setup();

//     render(
//         <Checklist
//             data={[{ id: 1, name: 'lucy', role: 'Manager' }]}
//             id="id"
//             primary="name"
//             secondary="role"
//         />,
//     );

//     const lucyCheckbox = screen.getByTestId('Checklist__input__1');
//     expect(lucyCheckbox).no
// });
