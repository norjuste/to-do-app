import React from 'react'
import TodoListItem from './TodoListItem'
import Text from '../Text/Text'
import TaskForm from '../TaskForm/TaskForm'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }

    this.addTask = this.addTask.bind(this)
    this.markTaskAsCompleted = this.markTaskAsCompleted.bind(this)
    this.renderActiveTasks = this.renderActiveTasks.bind(this)
    this.renderDoneTasks = this.renderDoneTasks.bind(this)
  }

  async componentDidMount() {
    const tasks = await this.props.getTasks()
    this.setState({ tasks })
  }

  addTask(newTaskTitle) {
    const newTask = { title: newTaskTitle, isCompleted: false, id: Date.now() }

    this.props.addTask(newTask)

    this.setState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
    }))
  }

  markTaskAsCompleted(updatedTask) {
    this.props.updateTask(updatedTask)

    this.setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, isCompleted: true } : task
      ),
    }))
  }

  renderActiveTasks() {
    return this.state.tasks
      .filter(({ isCompleted }) => !isCompleted)
      .map((task) => (
        <TodoListItem
          key={task.id}
          isActive={true}
          onClick={() => this.markTaskAsCompleted(task)}
        >
          {task.title}
        </TodoListItem>
      ))
  }

  renderDoneTasks() {
    return this.state.tasks
      .filter(({ isCompleted }) => isCompleted)
      .map(({ title, id }) => (
        <TodoListItem key={id} isActive={false}>
          {title}
        </TodoListItem>
      ))
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        {this.renderActiveTasks()}
        {this.renderDoneTasks()}
        <Text>Total tasks: {this.state.tasks.length}</Text>
      </div>
    )
  }
}

export default TodoList
