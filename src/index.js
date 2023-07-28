import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList/TodoList'
import { getTasks, updateTask, addTask } from './api'

const App = () => (
  <TodoList getTasks={getTasks} updateTask={updateTask} addTask={addTask} />
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
