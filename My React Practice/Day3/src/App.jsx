const App = () => {
  let n = 12;
  let s = 'Hello world';
  let b = false;
  let nu = null;
  let un = undefined;
  let array = [<h1>Hey</h1>, 'hello', 5, true, undefined];
  let obj = { name: 'Tarun', age: 29 };

  return (
    <>
      <h1>Datatypes behaviour in React</h1>
      <h2>Number :{n}</h2>
      <h2>String :{s}</h2>
      <h2>Boolean :{b}</h2>
      <h2>Null :{nu}</h2>
      <h2>Undefined :{un}</h2>
      <h2>Array :{array}</h2>
      <h2>Objcet :{obj.name} | {obj.age}</h2>
    </>
  );
};

export default App;
