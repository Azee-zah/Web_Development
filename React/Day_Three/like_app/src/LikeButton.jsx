import './LikeButton.css'
import {useState} from 'react'

function LikeButton() {
    const [like, setLike] = useState(false)
    const [likeCount, setlikeCount] = useState(0)


    function toLike() {
        setLike(prevLike => !prevLike)
        if(!like) {
            setlikeCount(prevLikeCount=> prevLikeCount + 1)

        }
        else{setlikeCount(0)}
        
    }

    return(
        <div className='likeClass'>
            <p>Like ❤️ {like} <span>{likeCount}</span></p>

            <button onClick={toLike}>Like </button>
        </div>
    )



}

export default LikeButton