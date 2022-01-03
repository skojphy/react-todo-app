import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => (
  <div className="TodoTemplate">
    <div className="app-title">Todo</div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
