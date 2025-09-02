const Read1 = (props) => {
  let users = props.users;
  let userRender = users.map((user, index) => {
    return (
      <li key={index}>
        {user.name} | {user.age}
      </li>
    );
  });
  return (
    <>
      <h1>Render users</h1>
      <ol>{userRender}</ol>
    </>
  );
};

export default Read1;
