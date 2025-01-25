import { Todo } from "../type";
import TodoItem from "./TodoItem";
import TodoItemContainer from "./TodoListCss.ts";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  console.log(todos); // 调试输出

  return (
    <ul>
      {Array.isArray(todos) ? todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
      )) : null}
    </ul>
  );
}

export default TodoList;