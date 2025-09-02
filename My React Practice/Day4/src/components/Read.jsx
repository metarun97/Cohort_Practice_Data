const Read = (props) => {
  const users = props.users;
  // const setusers = props.setusers;
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        {user.name} | {user.age}
      </li>
    );
  });
  return (
    <>
      <h1>User data</h1>
      <ol>{renderUsers}</ol>
    </>
  );
};

export default Read;
