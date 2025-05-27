import { useForm, type FieldValues } from "react-hook-form";

const HookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <span></span>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          type="number"
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

export default HookForm;
