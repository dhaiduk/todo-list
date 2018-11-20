import { connect } from 'react-redux'

import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

import TodoList from '../components/TodoList'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
      case VisibilityFilters.SHOW_TIME:
      return todos.filter(t => t.result.time==="07:30")
      case VisibilityFilters.SHOW_PRIORITY:
      return todos.filter(t => t.result.priority.picker==="101")
      

    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
