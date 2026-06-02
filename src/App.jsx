import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import AddExpense from './pages/AddExpense.jsx';
import ExpenseList from './pages/ExpenseList.jsx';

function App() {

  return (
    <BrowserRouter basename="/expence-ui">
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
            <Route path="/" element={<AddExpense />} />
            <Route path="/expenses" element={<ExpenseList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
