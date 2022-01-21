import fetch from 'node-fetch';

const API_URL = "http://localhost:3000/todos/"

async function createTodo(task) {
  const body = {task: task};

  const response = await fetch(API_URL, {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();
  console.log(data);

  return data
}

async function deleteTodo(id) {
    const message = await fetch(`${API_URL}${id}`, { method: 'DELETE' });
    return message
}


async function updateTodo(id, payload) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    const response = await fetch(`${API_URL}${id}`, requestOptions);
    const data = await response.json();
    return data
}

// 
async function getAllTodos() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos }
