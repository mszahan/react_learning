import { useRef, type FormEvent } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <span>
        name: {person.name} age: {person.age}{" "}
      </span>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" ref={nameRef} className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input type="number" ref={ageRef} className="form-control" id="age" />
      </div>
      <button className="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
