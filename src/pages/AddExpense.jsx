import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddExpense({ onAdd }) {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !source.trim()) {
      setMessage('Please enter both a name and a source.');
      return;
    }

    onAdd({ name: name.trim(), source: source.trim() });
    setName('');
    setSource('');
    setMessage('Expense added successfully!');

    setTimeout(() => {
      navigate('/expenses');
    }, 500);
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
