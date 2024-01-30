// import {FormEvent } from "react";
import { Form, ActionFunctionArgs, redirect } from "react-router-dom";

type Contact = {
    name: string;
    email: string;
    reason:string;
    notes:string;
};

export function OldContactPage() {
    // const [contact, setContact] = useState <Contact> ({
    //     name:'',
    //     email: '',
    //     reason: '',
    //     notes: '',
    // })

    // function handleSubmit (e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const contact = {
    //         name: formData.get('name'),
    //         email: formData.get('email'),
    //         reason: formData.get('reason'),
    //         notes: formData.get('notes'),
    //     } as Contact;
    //     console.log('Submitted details:', contact)
    // }

    const fielStyle = 'flex flex-col mb-2'

    return (
        <div className="py-10 max-w-md mx-auto">
            <h2 className='text-3xl font-bold mb-3'>
                Contact us
            </h2>
            <p className="mb-10">
                Please enter your details for contact
            </p>

            <Form method="post">
                <div className={fielStyle}>
                    <label htmlFor="name">Name</label>
                    <input 
                    className="rounded"
                    type="text" 
                    name="name"
                    required
                    id="name"/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="email">Email</label>
                    <input 
                    className="rounded"
                    type="email" 
                    name="email"
                    required
                    pattern="\S+@\S+\.\S+"
                    id="email"/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="reason"> Reason you need to contact us</label>
                    <select 
                    className="rounded"
                    name="reason"
                    required
                    id="reason">
                        <option value=""></option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="notes">Additional notes</label>
                    <textarea 
                    className="rounded"
                    name="notes"
                    id="notes"></textarea>
                </div>
                <div>
                    <button 
                    type="submit"
                    className="mt-2 h-10 px-6 font-semibold bg-black text-white rounded"
                    >
                        Submit
                    </button>
                </div>

            </Form>
            
        </div>
    )
}

export async function oldcontactPageAction ({request, }: ActionFunctionArgs) {
    const formData = await request.formData();
    const contact = {
        name: formData.get('name'),
        email: formData.get('email'),
        reason: formData.get('reason'),
        notes: formData.get('notes'),
    } as Contact;
    console.log('Submitted details:', contact)

    return redirect (
        `/thank-you/${formData.get('name')}`
    );
}