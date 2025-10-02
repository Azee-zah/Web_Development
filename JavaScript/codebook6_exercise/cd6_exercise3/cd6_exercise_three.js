function darkMode() {
    let page = document.getElementById('container');
    let theme = page.style.backgroundColor = 'black'
    let theme1 = page.style.color = 'white'

    localStorage.setItem('Theme', theme);
    localStorage.setItem('Theme', theme1)
}


function lightMode() {
    let pageOne = document.getElementById('container');
    let theme = page.style.backgroundColor = 'white'
    let theme1 = page.style.color = 'black'

    localStorage.setItem('Theme', theme);
    localStorage.setItem('Theme', theme1)
}

function blueMode() {
    let pageTwo = document.getElementById('container');
    let theme = pageTwo.style.backgroundColor = 'blue'
    let theme1 = pageTwo.style.color = 'white'

    localStorage.setItem('Theme', theme);
    localStorage.setItem('Theme', theme1)
}