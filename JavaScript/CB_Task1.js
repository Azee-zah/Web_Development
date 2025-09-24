function getGrade() {

    let score = Number(prompt("Enter your Result here"))
    if (score === 100) {
        console.log (`${score} Outstanding! Grade: A+`);
    } else if(score >= 90) {
        console.log (score, "Grade: A");
    } else if(score >= 80) {
        console.log(score, "Grade: B");
    } else if(score >= 70) {
        console.log(score, "Grade: C");
    } else if(score >= 60) {
        console.log(score, "Grade D");
    } else {
        console.log("Grade: F")
    }  
}

   
// TASK Two

function calculatePrice() {
    let price = Number(prompt("How much is your purchase"));
    let customerType = prompt("Are you a student, senior, employee or others");
    let isFirstPurchase = prompt("Is this your first purchase true or false");


    if (customerType === "student" && isFirstPurchase === true) {
        console.log("Goods Price:", price - (price * 15 /100));
    } else if (customerType === "senior" && isFirstPurchase === true) {
        console.log("Goods Price:", price - (price * 15 /100));
    } else if (customerType === "employee" && isFirstPurchase === true) {
        console.log("Goods Price:", price - (price * 20 / 100));
    } else if (customerType === "others" && isFirstPurchase === true) {
        console.log("Goods Price:", price - (price * 5 / 100)); 
    } else{
         console.log("Price:" , price , "Additional discount is only for first timers!")
    }
       
    

    if (customerType === "student") {
        console.log("Goods Price:", price - (price * 10 / 100));
    } else if (customerType === "senior") {
        console.log("Goods Price:", price - (price * 15 / 100));
    } else if (customerType === "employee") {
        console.log("Goods Price:", price - (price * 20 / 100));
    } else {
        console.log("Price:", price, "You do not have a discount!")
    }

}


function weatherAdvice () {
    let weather = Number(prompt("Enter the temperature degrees in your area"));
    let isRaining = prompt("Is it raining ? true or false");

    if (weather < 32 && isRaining === true) {
        console.log("Weather-Advice: Freezing rain! Stay inside!");
    } else if (weather < 32) {
        console.log("Weather-Advice: Very cold, wear a heavy coat");
    }else if (weather <= 60) {
        console.log("Weather-Advice: Chilly, bring a jacket");
    } else if (weather <=80) {
        console.log("Weather-Advice: Nice weather");
    }else if (weather > 80)
        console.log ("Weather-Advice: It's hot, stay hydrated")


    isRaining === true ? "Bring an Umbrella" : "No Umbrella needed"
}

function atm(balance, action, amount) {
    // let balance = 600;
    // let action = prompt("deposit or withdraw ")
    // let amount = Number(prompt(`Enter ${action} amount`));

    if (action === "withdraw") {
        if (amount > 500) {
            console.log("Exceed limits. You can not withdraw more than 500 at once")
        } else if (amount <= balance) {
            balance -= amount
            console.log(`Withdrawal successful New balance: ${balance}`)
        }else {
            console.log (`Insufficient balance, make a deposit first!`)
        }
    } else if (action === "deposit") {
        balance = amount + balance
        // amount += balance
        console.log(`Successfully deposited ${amount}.
            New balance: ${balance}`)
    } else{
        console.log("Invalid option, choose deposit or withdraw")
    }
}

atm(1000, "withdraw", 200)
atm(2000, "deposit", 1000)
atm(200, "withdraw", 500)
atm(500, "deposit", 200)



function personalAssistant() {
    let weather = prompt("How is the weather like? sunny, rainy or cloudy");
    let dayType = prompt("Is it workday, weekend or holiday ?");
    let time = prompt("what hour are you in morning, afternoon, evening or night");

    if (time === "morning" && weather === "sunny" && dayType === "workday") {
        console.log("Do have a great time at work, Your scheduled meetings are intact")
    } else if (time === "afternoon" && weather === "sunny" && dayType === "workday") {
        console.log("Review your remaining activities, and do have a great day")
    } else if (time === "evening" && weather === "sunny" &&     dayType === "workday") {
        console.log("Time to leave for home. You must have had a busy day")
    } else {
        console.log("See you tomorrow")
    }

}



