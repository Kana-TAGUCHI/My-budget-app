import React from 'react';
import { IncomeItem } from './IncomeItem';
import { ExpenseItem } from './ExpenseItem';

export const ItemsList = ({ deleteIncome, deleteExpense, incomeItems, expenseItems, incomeTotal }) => {

  return (
    <div className="list-container">
      <div className="income-list">
        <h3>収入一覧</h3>
          <ul className="list">
            {incomeItems.map((incomeItem) => (
              <IncomeItem 
                deleteIncome={deleteIncome}
                incomeText={incomeItem.text}
                incomeAmount={incomeItem.amount}
                incomeItem={incomeItem}
                key={incomeItem.docId}
              />
            ))}
          </ul>
      </div>
      <div className="expense-list">
        <h3>支出一覧</h3>
        <ul className="list">
            {expenseItems.map((expenseItem) => (
              <ExpenseItem
                deleteExpense={deleteExpense}
                expenseText={expenseItem.text}
                expenseAmount={expenseItem.amount}
                expenseItem={expenseItem}
                key={expenseItem.docId}
                incomeTotal={incomeTotal}
              />
            ))}
          </ul>
      </div>
    </div>
  )
}
