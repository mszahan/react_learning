import { useState } from "react";
import { useForm } from "react-hook-form";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: "Home" | "Education" | "Game" | " Others";
}

const ExpenseForm = () => {
  const categories = ["Home", "Education", "Game", "Others"];
  const [expenseList, setExpenseList] = useState<Expenses[]>([]);
  const { register, handleSubmit, reset } = useForm<Expenses>();
  const onSubmit = (data: Expenses) => {
    const newId =
      expenseList.length == 0 ? 1 : expenseList[expenseList.length - 1].id + 1;
    setExpenseList([...expenseList, { ...data, id: newId }]);
    reset();
  };

  return (
    <div className="container">
      <h3 className="mt-5">Add your expense here</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            {...register("amount")}
            id="amount"
            className="form-control"
          />
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
            {categories.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
