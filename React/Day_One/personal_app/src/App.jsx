import Header from './Components/Header'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import Location from './Components/Location'
import './App.css'

function App() {
  return(
    <div>
      <Header />
      <div className='allCards'>
        <Skills />
        <Location />
        <Footer />
      </div>

     
    </div>
  )
  

  
}



export default App
