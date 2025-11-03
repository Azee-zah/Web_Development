import {useState} from 'react'

function useToggle(initialValue = false) {
    const [isVisible, setIsVisible] = useState(initialValue);

    function toggle() {
        setIsVisible(prev => !prev)
    }

    return {isVisible, toggle};
}

export default useToggle