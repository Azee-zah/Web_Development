function handleKeyPress() {
    let messageArea = document.getElementById('message').value;
    let output = document.getElementById('KeyOutput')
    
    if (messageArea.length === 0) {
        output.textContent = ""
    } else {
        output.textContent = `You typed ${messageArea.length} characters`
        output.style.color = "blue"
    }

    if (messageArea.length > 200) {
        output.textContent = "Text cannot be more than 200";
        output.style.color = "red"
    }

}