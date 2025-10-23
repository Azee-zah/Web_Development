
// import './App.css'
import ProductCard from './ProductCard'

function App() {
  return(
    <div className='app'>
    <h2 className='title'>Nigerian E-Commerce Site</h2>
    <div className='allProducts'>

      <ProductCard 
        image= "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/8251872/1.jpg?7303"

        name= "Sneakers"

        price="#26,780"

        inStock={true}
      />

      <ProductCard 
        image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGBidONWATInmcgHegYSqPDl9Bv0mikESUw&s"

        name= "Ankara Bag"

        price="#2,680"

        inStock={true}
      />

      <ProductCard 
        image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBT2s0m33ED0MmyfZ1FJhkMJ50zOnyS1JMEA&s"

        name= "Wrist watch"

        price="#1,680"

        inStock={false}
      />
    </div>
  </div>
  )
  
}
  

export default App
