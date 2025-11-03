import React from 'react'

let Footer = () => {
    let year = new Date().getFullYear();

    return(
        <footer>
            <p>© {year} Publica Academy. All rights reserved </p>
        </footer>
    );
}


export default Footer