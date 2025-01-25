import styled from "styled-components";

export const TodoItemContainer = styled.li<{ completed?: string }>`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin: 5px 400px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  /* 根据任务是否完成，设置不同的文本装饰 */
  text-decoration: ${props => props.completed === 'true' ? 'line-through' : 'none'};

  button {
    background: none;
    border: none;
    color: #384584;
    cursor: pointer;
    justify-content: center;
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;


    &:hover {
      color: #c0392b;
    }
  }
`;