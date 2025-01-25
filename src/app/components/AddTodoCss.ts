import styled from "styled-components";

export const AddTodoContainer = styled.div`
  margin: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: calc(40% - 20px); /* 预留按钮的空间 */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
