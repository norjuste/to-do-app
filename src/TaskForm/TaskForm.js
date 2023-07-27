import React from 'react'
import Button from '../Button/Button'

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTaskTitle: '',
    }
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this)
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this)
  }

  handleTaskNameChange(e) {
    const newTaskTitle = e.target.value
    this.setState((prevState) => ({
      ...prevState,
      newTaskTitle,
    }))
  }

  handleAddTaskClick() {
    this.props.addTask(this.state.newTaskTitle)
    this.setState({ newTaskTitle: '' })
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.newTaskTitle}
            onChange={this.handleTaskNameChange}
          />
        </div>
        <Button onClick={this.handleAddTaskClick}>Add Task</Button>
      </div>
    )
  }
}

export default TaskForm
