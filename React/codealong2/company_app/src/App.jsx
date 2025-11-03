import CompanyCard from './CompanyCard'
import './App.css'

function App() {
  return(
    <div className='app'>
      <h1>Top Nigerian Tech Companies</h1>
      <div className='company-grid'>

        <CompanyCard
          name= "PayStack"
          industry="Fintech"
          location="Lagos"
          employees="200+"
          logo="https://assets.paystack.com/assets/img/hero/paystack-opengraph.png"
          
          featured={true}
        />


        <CompanyCard
          name= "Flutterwave"
          industry="Payment Solutions"
          location="Lagos"
          employees="500+"
          logo="https://th.bing.com/th/id/OIP._IrOvdePeR319hV2rgYP-gHaEH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          featured={true}
        />

        <CompanyCard
          name= "Andela"
          industry="Tech Talent"
          location="Lagos"
          employees="1000+"
          logo="https://assets-global.website-files.com/6480f74670678239cc947755/64b86728b2599a3207e17dd1_10_Modern%20Slavery.png"

          featured={false}
        />

      </div>
    </div>
    
  )
}


export default App
