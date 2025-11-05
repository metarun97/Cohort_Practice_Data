const App = () => {
  const users = [
    {
      username: 'Tarun',
      age: 29,
      city: 'Bulandshahr',
    },
    {
      username: 'Shweta',
      age: 32,
      city: 'Bulandshahr',
    },
    {
      username: 'Sakshi',
      age: 25,
      city: 'New Delhi',
    },
  ];

  // localStorage.setItem('users', JSON.stringify(users));
  // const usersData = JSON.parse(localStorage.getItem('users'));

  // console.log(usersData);

  localStorage.clear();

  return <div>App</div>;
};

export default App;
