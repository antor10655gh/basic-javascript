class Person{
    constructor(){
        this.firstName = "AM";
        this.lastName  = "Antor";
        this.dob       = 1999;
    }
    ageCalculate(){
        let birthYear = this.dob;
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let age = currentYear - birthYear;
        return `Your age is: ${age}`;
    }
}

let personInfo = new Person();
console.log(personInfo);
console.log(personInfo.ageCalculate());