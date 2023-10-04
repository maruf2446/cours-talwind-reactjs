
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Reviews from './Components/Reviews'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <main>
          <div id='home'>
            <Home></Home>
          </div>

          <div id='about'>
            <About></About>
          </div>

          <div id='courses'>
            <Courses></Courses>
          </div>

          <div id='reviews'>
            <Reviews></Reviews>
          </div>

          <div id='contact'>
            <Contact></Contact>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  )
}

export default App
