const meBtn = document.getElementById("about-btn")
const contactBtn = document.getElementById("contacts-btn")
const skillsBtn = document.getElementById("my-skills-btn")

const aboutMe = document.getElementById("me-content")
const myContact = document.getElementById("tel-content")
const mySkills = document.getElementById("skills-content")


meBtn.onclick = function(){
    aboutMe.style.display = 'block'
    myContact.style.display = 'none'
    mySkills.style.display = 'none'
}

contactBtn.onclick = function(){
    aboutMe.style.display = 'none'
    myContact.style.display = 'block'
    mySkills.style.display = 'none'
    
}

skillsBtn.onclick = function(){
    aboutMe.style.display = "none"
    myContact.style.display = "none"
    mySkills.style.display = "block"
    
}