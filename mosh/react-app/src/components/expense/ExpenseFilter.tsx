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
        <option value="Education">Education</option>
        <option value="Travel">Travel</option>
        <option value="Groceries">Groceries</option>
        <option value="Home rent">Home rent</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
