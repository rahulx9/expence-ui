import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import AddExpense from './pages/AddExpense.jsx';
import ExpenseList from './pages/ExpenseList.jsx';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((current) => [
      {
        id: crypto.randomUUID(),
        createdAt: new Date().toLocaleString(),
        ...expense
      },
      ...current
    ]);
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">Expense Monitor</div>
          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Add Expense
            </NavLink>
            <NavLink to="/expenses" className={({ isActive }) => (isActive ? 'active' : '')}>
              Expense List
            </NavLink>
          </nav>
        </header>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<AddExpense onAdd={addExpense} />} />
            <Route path="/expenses" element={<ExpenseList expenses={expenses} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
