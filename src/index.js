import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList/TodoList'

function App() {
  const someTasks = [
    { id: 1, title: 'Wash dishes', done: false },
    { id: 2, title: 'Read book', done: false },
    { id: 3, title: 'Get some sleep', done: true },
  ]
  return <TodoList tasks={someTasks} />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
