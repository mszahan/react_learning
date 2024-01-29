import { useState, FormEvent } from "react";

type Contact = {
    name: string;
    email: string;
    reason:string;
    notes:string;
};

export function ContactPage() {
    const [contact, setContact] = useState <Contact> ({
        name:'',
        email: '',
        reason: '',
        notes: '',
    })

    function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitted details', contact)
    }

    const fielStyle = 'flex flex-col mb-2'

    return (
        <div className="py-10 max-w-md mx-auto">
            <h2 className='text-3xl font-bold mb-3'>
                Contact us
            </h2>
            <p className="mb-10">
                Please enter your details for contact
            </p>

            <form onSubmit={handleSubmit}>
                <div className={fielStyle}>
                    <label htmlFor="name">Name</label>
                    <input 
                    className="rounded"
                    value={contact.name}
                    onChange={e => setContact({...contact, name: e.target.value})}
                    type="text" 
                    id="name"/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="email">Email</label>
                    <input 
                    className="rounded"
                    value={contact.email}
                    onChange={e => setContact({...contact, email: e.target.value})}
                    type="email" 
                    id="email"/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="reason"> Reason you need to contact us</label>
                    <select 
                    className="rounded"
                    value={contact.reason}
                    onChange={e => setContact({...contact, reason: e.target.value})}
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
                    value={contact.notes}
                    onChange={e => setContact({...contact, notes: e.target.value})}
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

            </form>
            
        </div>
    )
}