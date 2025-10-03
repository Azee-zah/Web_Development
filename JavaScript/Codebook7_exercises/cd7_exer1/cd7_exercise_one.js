class Book{
    constructor(id, title, author, year, isBorrowed = false){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = isBorrowed
        this.DateStamp = new Date().toLocaleDateString()
    }

    getSummary(){
        return `Book: ${this.title} was written by ${this.author} in year ${this.year}`
    }


    borrowBook(){
        if (this.isBorrowed === true){
            return `${this.title} has been borrowed on ${this.DateStamp}`;
        } else {
            return `${this.title} is available to borrow`
        }
        
    } 
}


let Book1 = new Book(1, "Only Big Bumbum matters", "Damilare Kuku", 2024, false)

let Book2 = new Book(2, "Adanna", "Ifeanyi Odi", 2020, true)

console.log(Book1.getSummary())
console.log('')
console.log(Book2.getSummary())

console.log(Book2.borrowBook())
console.log(Book1.borrowBook())



