import './Counter.css'
import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function decrement() {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount = 0)
        
        }
        
    

   
    return(
        <div className='gen-con'>
            <p>Count: {count}</p>
            <div className='btn'>
                <button className='dcrs' onClick= {decrement}>Decrease -</button>

                <button onClick={() => setCount(count + 1)}>Increase +</button>

                <button className='reset' onClick={() => setCount(0)}>Reset</button>
            </div>
           
        </div>
    )
}

export default Counter