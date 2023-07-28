const ENDPOINT = 'http://localhost:4000'

export const getTasks = async () => {
  const response = await fetch(`${ENDPOINT}/list`)
  return response.json()
}

export const addTask = async (task) => {
  const response = await fetch(`${ENDPOINT}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  return response.json()
}

export const updateTask = async (updatedTask) => {
  const response = await fetch(`${ENDPOINT}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...updatedTask, isCompleted: true }),
  })

  return response.json()
}
