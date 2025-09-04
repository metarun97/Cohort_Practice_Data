const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  // ^ Rendering todos:-
  const renderTodos = todos.map((todo) => {
    return (
      <li style={{ color: todo.isCompleted ? 'green' : 'red' }} key={todo.id}>
        {todo.title}
      </li>
    );
  });
  return (
    <div>
      <h1 style={{ color: '#333' }}>Created Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
