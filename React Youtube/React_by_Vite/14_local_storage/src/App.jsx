const App = () => {
  const user = {
    name: 'Tarun',
    age: 29,
    city: 'Bulandshahr',
  };

localStorage.setItem("user",JSON.stringify(user));
let userDet = JSON.parse(localStorage.getItem("user"))
console.log(typeof userDet)

  return <div>App</div>;
};

export default App;
