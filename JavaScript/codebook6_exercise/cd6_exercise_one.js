function saveNote() {
    let notes = document.getElementById('myNotes').value.trim()
    if (notes !== ''){
        localStorage.setItem('Notes', notes)
        // display.textContent = "Successfully Saved"
        // display.style.color = "green"
        alert("Your notes has been saved successfully")
        document.getElementById('myNotes').textContent = ''
    } else {
        alert("Notes cannot be empty")
    }
};





function loadNote() {
    let notes = document.getElementById('myNotes').value;
    let display = document.getElementById('displaySection');

    let savedNotes = localStorage.getItem('Notes');
    if (savedNotes !== null) {
        alert("fetching your notes...")
        display.innerHTML = `Notes: ${savedNotes}`
        display.style.color = 'blue'
        
    }
}