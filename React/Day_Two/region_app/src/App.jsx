
import './App.css'
import StateCard from './StateCard'

function App() {
  return(
    <div className='gen-con'>
      <h2>Nigerian States' Information</h2>
      <div className='card-grid'>
        < StateCard
          state= "Oyo"
          capital= "Ibadan"
          region= "West"
          population= "~9million"
        />

        < StateCard
          state= "Abia"
          capital= "Umuahia"
          region= "East"
          population= "~4million"
        />

        < StateCard
          state= "Kebbi"
          capital= "Birnin Kebbi"
          region= "North"
          population= "~5million"
        />

        < StateCard
          state= "Rivers"
          capital= "Port Harcourt"
          region= "South"
          population= "~8million"
        />
      </div>
    </div>
  )
}
export default App
