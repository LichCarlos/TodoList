
import { TodoItemContainer } from "./TodoItemCss";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <TodoItemContainer completed={todo.completed ? 'true' : undefined}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => toggleTodo(todo.id)}>切换</button>
        <button onClick={() => deleteTodo(todo.id)}>删除</button>
      </div>
    </TodoItemContainer>
  );
}

export default TodoItem;