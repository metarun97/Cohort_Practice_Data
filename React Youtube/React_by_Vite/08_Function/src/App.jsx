const App = () => {
  // const handleInpChange = (val) => {
  //   console.log(val);
  // };

  // const btnClick = () =>{
  //   console.log("Btn Cliked!")
  // }

  return (
    <>
      <div>
        {/* <input
        onChange={(elem) => {
          handleInpChange(elem.target.value);
        }}
        type="text"
        placeholder="Enter text..."
      /> */}

        {/* <div className="box"
        onMouseMove={() => {
          console.log('nachooo');
        }}
      ></div> */}
      </div>

      {/* <div
        onWheel={(elem) => {
          // console.log(elem.deltaY);
          if (elem.deltaY > 0) {
            console.log('Seedha scroll');
          } else {
            console.log('Ulta scroll');
          }
        }}
      >
        <div className="sec1"></div>
        <div className="sec2"></div>
        <div className="sec3"></div>
      </div> */}
      <button onClick={btnClick}>Click</button>
    </>
  );
};

export default App;
