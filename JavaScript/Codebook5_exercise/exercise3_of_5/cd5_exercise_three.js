function submit() {
    function handleSubmit(event){
        event.preventDefault()
    }
    let firstField = document.getElementById('userInput').value;
    let secondField = document.getElementById('passwordInput').values

    let showDiv = document.getElementById('output');

    


    if (firstField === "" || secondField === "") {
        showDiv.textContent = "Please fill in all fields";
        showDiv.style.color = "red"
    } else {
        showDiv.textContent = `Welcome, ${firstField}`
        showDiv.style.color = "green"
        showDiv.style.fontSize = "20px"
    }

    if (firstField === "admin" && secondField === 1234) {
        secondField = Number(secondField)
        showDiv.textContent = `${firstField} logged in successfully`
    };
}