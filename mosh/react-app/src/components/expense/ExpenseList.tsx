interface ExpenseList {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: ExpenseList[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenseList, onDelete }: Props) => {
  if (expenseList.length === 0) {
    return null;
  }
  return (
    <div className="table">
      <h3 className="mt-5">All the expense</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(item.id)}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expenseList
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
