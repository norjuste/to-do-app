import styled from 'styled-components'

const TodoListItem = styled.div`
  font-weight: ${(props) => (props.isActive ? `bold` : `normal`)};
  text-decoration: ${(props) => (!props.isActive ? `line-through` : `none`)};
`

export default TodoListItem
