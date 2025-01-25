import React from 'react';
import { Container, Button } from './TodoFilterCss';
// 定义 filter 类型
type FilterType = 'all' | 'active' | 'completed';

// 定义组件 props 类型
interface TodoFilterProps {
  setFilter: (filter: FilterType) => void;
}

function TodoFilter({ setFilter }: TodoFilterProps) {
  return (
    <Container>
      <Button theme="all" onClick={() => setFilter('all')}>全部</Button>
      <Button theme="active" onClick={() => setFilter('active')}>待办</Button>
      <Button theme="completed" onClick={() => setFilter('completed')}>已办</Button>
    </Container>
  );
}

export default TodoFilter;