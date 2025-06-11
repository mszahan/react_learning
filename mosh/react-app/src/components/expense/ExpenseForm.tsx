import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type Expenses = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: Expenses) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Expenses>({ resolver: zodResolver(schema) });

  return (
    <div className="container mb-5">
      <h3 className="mt-5">Add your expense here</h3>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            {...register("description")}
            id="description"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Categories
          </label>
          <select
            id="categories"
            {...register("category")}
            className="form-select"
          >
            <option value="">All category</option>
            {categories.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
