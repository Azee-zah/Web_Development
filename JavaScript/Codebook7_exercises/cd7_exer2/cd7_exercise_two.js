class Student{
    constructor(id, name, age, grades = []){
        this.id = id;
        this.age = age
        this.name = name;
        this.grades = grades
       
    }

    calculateAverage() {
        let total = 0;
        for(let g of this.grades) {
            total += g;    
        }
        return (total / this.grades.length)  
    }

    gradeAverage(){
       return this.calculateAverage() >= 50 ? `"✅ Passed"`: `"❌ Failed"`
    }

    getDetails() {
        return `${this.name} is ${this.age} years old with grades ${this.grades} and the average grade of ${this.calculateAverage()} ${this.gradeAverage()}`
    }
}

let StudentA = new Student(1, "Adams Funmilayo", 21, [80, 75, 90, 85])
let StudentB = new Student(2, "Jane Ronke", 20, [60, 75, 87, 90])
let StudentC = new Student(2, "John Doe", 22, [50, 45, 45, 45])

console.log(StudentA.getDetails())
console.log('')
console.log(StudentB.getDetails())
console.log(StudentC.getDetails())

console.log(StudentB.calculateAverage())