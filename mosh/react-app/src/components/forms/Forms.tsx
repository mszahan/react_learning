import Form from "./Form";
import ConrolledForm from "./ControlledFrom";
import HookForm from "./HookForm";

const Forms = () => {
  return (
    <div className="container">
      <h3>Form with useRef</h3>
      <Form />
      <h3>Controlled form with useState</h3>
      <ConrolledForm />
      <h3>Form with react-hook-form</h3>
      <HookForm />
    </div>
  );
};

export default Forms;
