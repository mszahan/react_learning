import { useForm, FieldError } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { ValidationError } from './ValidationError';

type Contact = {
    name: string;
    email: string;
    reason:string;
    notes:string;
};

export function ContactPage() {
    const { register, handleSubmit, 
        formState: {errors} } = useForm <Contact>({
        mode:'onBlur',
        reValidateMode: 'onBlur'
    });

    const navigate = useNavigate();
    function onSubmit (contact: Contact) {
        console.log('Submitted details:', contact)
        navigate(`/thank-you/${contact.name}`)
    }
    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError ? 'border-red-500 rounded' : 'rounded';
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

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={fielStyle}>
                    <label htmlFor="name">Name</label>
                    <input 
                    {...register('name', {required: 'You must enter your name'})}
                    className={getEditorStyle(errors.name)}
                    type="text"
                    id="name"/>
                    <ValidationError fieldError={errors.name}/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="email">Email</label>
                    <input 
                    {...register('email', {
                        required: 'You must enter your Email',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Email is not valid'
                        }
                    })}
                    className={getEditorStyle(errors.email)}
                    type="email" 
                    id="email"/>
                    <ValidationError fieldError={errors.email}/>
                </div>
                <div className={fielStyle}>
                    <label htmlFor="reason"> Reason you need to contact us</label>
                    <select 
                    {...register('reason', {required: 'You must provide the reason'})}
                    className={getEditorStyle(errors.reason)}
                    id="reason">
                        <option value=""></option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                    <ValidationError fieldError={errors.reason}/>
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
