import './LikeButton.css'
import {useState} from 'react'

function LikeButton() {
    const [like, setLike] = useState(false)

    function isLike() {
       setLike(prevLike => !prevLike)

    }

    return (
        <div>
            <button onClick={isLike}>

            </button>

        </div>
    )
}