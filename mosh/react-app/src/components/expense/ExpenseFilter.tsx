import { categories } from "./categories";

interface Props {
  onSelectCategory: (catergory: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="m-3">
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All category</option>
        {categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
