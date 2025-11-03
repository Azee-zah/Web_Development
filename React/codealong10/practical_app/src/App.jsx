import useToggle from './useToggle'
import './App.css'


function App() {
  const {isVisible, toggle} = useToggle(false)

  return(
    <div>
      <button onClick={toggle}>Toggle</button>
      {isVisible && <p>See Me!</p>}
    </div>
  )

}

export default App
