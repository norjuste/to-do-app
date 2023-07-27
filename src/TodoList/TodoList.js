import React from 'react'
import TodoListItem from './TodoListItem'
import Text from '../Text/Text'
import TaskForm from '../TaskForm/TaskForm'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: this.props.tasks,
    }

    this.addTask = this.addTask.bind(this)
    this.markTaskAsCompleted = this.markTaskAsCompleted.bind(this)
    this.renderActiveTasks = this.renderActiveTasks.bind(this)
    this.renderDoneTasks = this.renderDoneTasks.bind(this)
  }

  addTask(newTaskTitle) {
    this.setState((prevState) => ({
      ...prevState,
      tasks: [
        ...prevState.tasks,
        { title: newTaskTitle, done: false, id: Date.now() },
      ],
    }))
  }

  markTaskAsCompleted(taskId) {
    this.setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, done: true } : task
      ),
    }))
  }

  renderActiveTasks() {
    return this.state.tasks
      .filter(({ done }) => !done)
      .map(({ title, id }) => (
        <TodoListItem
          isActive={true}
          onClick={() => this.markTaskAsCompleted(id)}
        >
          {title}
        </TodoListItem>
      ))
  }

  renderDoneTasks() {
    return this.state.tasks
      .filter(({ done }) => done)
      .map(({ title }) => <TodoListItem isActive={false}>{title}</TodoListItem>)
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
