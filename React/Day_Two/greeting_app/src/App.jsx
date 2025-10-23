
import './App.css'
import Greeting from "./Components/GreetingCard"

function App() {
  return(
    <div >
      <div className='cards'>
        <Greeting name= "Azeezat" message="Have a fun time learning React" color="Blue"/>
      </div>
      <div className='cards'>
        <Greeting name="Abolore" message="You are doing great with React, Keep it up" color="purple" />
      </div>

      <div className='cards'>
        <Greeting name="Olamide" message="Enjoy your weekend while learning Backend" color={"green"} />
      </div>
      
    </div>
  )
}

  
export default App
