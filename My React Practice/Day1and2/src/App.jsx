const App = () => {
  const handleBtnClick = () => {
    alert('Hello world');
  };

  const handleMsgData = (msg) => {
    alert(msg);
  };

  return (
    <>
      <div>App</div>
      <button onClick={handleBtnClick}>Click</button>
      <button
        onClick={() =>
          handleMsgData('React UI is better then HTML,CSS & JS UI')
        }
      >
        MSG Button
      </button>
    </>
  );
};

export default App;
