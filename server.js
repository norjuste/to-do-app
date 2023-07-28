import express from 'express'
import cors from 'cors'
import { addTodo, updateTodo, getTodos } from './firebase.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/list', async (req, res) => {
  const todoList = await getTodos()
  res.send(todoList)
})

app.post('/add', async (req, res) => {
  const data = req.body
  await addTodo(data)
  res.send({ success: true })
})

app.post('/update', async (req, res) => {
  const data = req.body
  await updateTodo(data)
  res.send({ success: true })
})

app.listen(4000, () => console.log('App is running on port 4000'))
