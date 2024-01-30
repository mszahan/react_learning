import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

type Contact = {
    name: string;
    email: string;
    reason:string;
    notes:string;
};

export function ContactPage() {
    const { register, handleSubmit } = useForm <Contact>();
    const navigate = useNavigate();
    function onSubmit (contact: Contact) {
        console.log('Submitted details:', contact)
        navigate(`/thank-you/${contact.name}`)
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={fielStyle}>
                    <label htmlFor="name">Name</label>
                    <input 
                    {...register('name')}
                    className="rounded"
                    type="text"
                    required
                    id="name"/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="email">Email</label>
                    <input 
                    {...register('email')}
                    className="rounded"
                    type="email" 
                    required
                    pattern="\S+@\S+\.\S+"
                    id="email"/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="reason"> Reason you need to contact us</label>
                    <select 
                    {...register('reason')}
                    className="rounded"
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
                    {...register('notes')}
                    className="rounded"
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
