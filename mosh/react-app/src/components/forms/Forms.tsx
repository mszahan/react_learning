import Form from "./Form";
import ConrolledForm from "./ControlledFrom";
import HookForm from "./HookForm";
import ZodForm from "./ZodFrom";

const Forms = () => {
  return (
    <div className="container">
      <h3>Form with useRef</h3>
      <Form />
      <h3>Controlled form with useState</h3>
      <ConrolledForm />
      <h3>Form with react-hook-form</h3>
      <HookForm />
      <h3>Form with zod validation</h3>
      <ZodForm />
    </div>
  );
};

export default Forms;
