import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
