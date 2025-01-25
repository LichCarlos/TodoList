import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center; // 水平居中
  align-items: center;    // 垂直居中（如果需要）
  height: 100%;           // 确保容器有高度才能垂直居中
`;

interface ButtonProps {
  theme?: 'all' | 'active' | 'completed';
}

export const Button = styled.button<ButtonProps>`
  margin: 0 10px; /* 给按钮之间添加一些间距 */
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05); // 鼠标悬停时稍微放大
  }

  ${(props) => props.theme === 'all' && `
    background-color: #76c7c0;
  `}

  ${(props) => props.theme === 'active' && `
    background-color: #f9d34e;
  `}

  ${(props) => props.theme === 'completed' && `
    background-color: #ff6b6b;
  `}
`;