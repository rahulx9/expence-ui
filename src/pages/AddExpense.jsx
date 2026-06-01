import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addExpense } from '../services/expenseService';

export default function AddExpense() {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      if (!name.trim() || !source.trim()) {
        setMessage('Please enter both a name and a source.');
        return;
      }

      await addExpense({ name: name.trim(), source: source.trim() });
      setName('');
      setSource('');
      setMessage('Expense added successfully!');
      navigate('/expenses');
    } catch (error) {
      console.error('Error adding expense:', error);
    }

  };

  return (
    <section className="card page-card">
      <div className="section-header">
        <h1>Add a new expense</h1>
        <p>Track your expense quickly with a name and source.</p>
      </div>

      <form className="expense-form" onSubmit={handleSubmit}>
        <label>
          Expense Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Groceries"
          />
        </label>

        <label>
          Source
          <input
            type="text"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            placeholder="e.g. Credit card"
          />
        </label>

        <button className="primary-button" type="submit">
          Add Expense
        </button>

        {message && <div className="feedback-message">{message}</div>}
      </form>
    </section>
  );
}
