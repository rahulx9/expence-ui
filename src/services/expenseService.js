import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || ''
});

export const getAllExpenses = async () => {
  const res = await api.get('/data');
  return res.data;
}


export const addExpense = async (expense) => {
  const res = await api.post('/data', expense);
  return res.data;
}
