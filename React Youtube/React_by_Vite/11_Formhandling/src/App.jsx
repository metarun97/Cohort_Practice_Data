const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("From submitted")
  }
  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
