import { useState, type FormEvent } from "react";

const ConrolledForm = () => {
  const [person, setPerson] = useState({ name: "", age: "" });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
        <input
          type="text"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          className="form-control"
          id="age"
        />
      </div>
      <button className="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ConrolledForm;
