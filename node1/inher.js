class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class student extends Person{
    constructor (firstName, lastName, id, scores)
    {
        super (firstName, lastName, id)
        this.scores = scores
        //this.scores = scores
    }

    calculate()
    {
        let sum = 0
        let average = 0
        let l = this.scores.length
        let grade = "T"
        
        for(let i =0; i < this.scores.length; i++)
        {
            sum += this.scores[i]
        }
        average = sum / this.scores.length
        console.log(average)

        if (average >= 90 && average <= 100)
        {
            grade = "O"
        } else if (average >= 80 && average < 90)
        {
            grade = "E"
        } else if (average >= 70 && average < 80)
        {
            grade = "A"
        } else if (average >= 55 && average < 70)
        {
            grade = "P"
        } else if (average >= 40 && average < 55)
        {
            grade = "D"
        } else if ( average < 40)
        {
            grade = "T"
        } 

        //console.log(grade)
        return grade
    }
}

function main(){
let a = [31, 32, 34, 35]    
let s = new student("KA", "1etan", 21, a)
s.printPerson()
console.log(s.calculate())
}

main()