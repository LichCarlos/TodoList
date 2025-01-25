import React, { useState } from 'react';
import { AddTodoContainer, Form, Input, Button } from './AddTodoCss'; // 确保路径正确

interface AddTodoProps {
  addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') {
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <AddTodoContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          title="新建输入框"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          className="add-todo-input"
        />
        <Button type="submit" className="add-todo-button">新建事项</Button>
      </Form>
    </AddTodoContainer>
  );
}

export default AddTodo;