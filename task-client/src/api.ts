import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const createTask = async (title: string) => {
  const response = await axios.post(`${API_BASE_URL}`, { title, id: 1, completed: false });
  return response.data;
};

export const updateTask = async (taskId: number, completed: boolean) => {
  const response = await axios.put(`${API_BASE_URL}/tasks/${taskId}`, { completed });
  return response.data;
};

export const deleteTask = async (taskId: number) => {
  const response = await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
  return response.data;
};
