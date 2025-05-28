import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <span></span>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be 3 character long</p>
        )}
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
