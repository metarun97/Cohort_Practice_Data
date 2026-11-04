import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main">
      </main>
      <div className="cards">
        <Card url="https://images.unsplash.com/photo-1793620082638-be7651d41dc8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" title="title1" description="description 1" />
        <Card url="https://images.unsplash.com/photo-1793637222605-8a808d64f073?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" title="title2" description="description 2" />
        <Card url="https://images.unsplash.com/photo-1793556119647-46da040a5a4c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" title="title3" description="description 3" />
      </div>
      <Footer />
    </>
  )
}

export default App
