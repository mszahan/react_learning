import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseTracker = () => {
  const [expenseList, setExpenseList] = useState([
    { id: 1, description: "Book", amount: 10, category: "Education" },
    { id: 2, description: "Khata", amount: 20, category: "Education" },
    { id: 3, description: "Pen", amount: 15, category: "Education" },
    { id: 4, description: "Pencil", amount: 25, category: "Education" },
  ]);

  const [expenseCategory, setExpenseCategory] = useState("");
  const visibleExpenseList = expenseCategory
    ? expenseList.filter((item) => item.category === expenseCategory)
    : expenseList;
  return (
    <div className="container m-3">
      <ExpenseForm
        onSubmit={(newExpense) =>
          setExpenseList([
            ...expenseList,
            { ...newExpense, id: expenseList.length + 1 },
          ])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => setExpenseCategory(category)}
      />
      <ExpenseList
        expenseList={visibleExpenseList}
        onDelete={(id) =>
          setExpenseList(expenseList.filter((item) => item.id !== id))
        }
      />
    </div>
  );
};

export default ExpenseTracker;
