export default function ExpenseList({ expenses }) {
  return (
    <section className="card page-card">
      <div className="section-header">
        <h1>Expense list</h1>
        <p>Review all recorded expenses and their sources.</p>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <p>No expenses added yet. Add one from the "Add Expense" page.</p>
        </div>
      ) : (
        <div className="expense-grid">
          {expenses.map((expense) => (
            <div key={expense.id} className="expense-card">
              <div className="expense-row">
                <span className="expense-label">Name</span>
                <strong>{expense.name}</strong>
              </div>
              <div className="expense-row">
                <span className="expense-label">Source</span>
                <span>{expense.source}</span>
              </div>
              <div className="expense-row small-row">
                <span>{expense.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
