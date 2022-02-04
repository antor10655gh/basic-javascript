class Person {  // Person is the "Base Class"
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName  = lname;
    }

    fullname (){
        return `Hello ${this.firstName} ${this.lastName}!`;
    }
}

class Customer extends Person{  // Customer is the "Sub Class"
    constructor(fname, lname, phone, memberShip){
        super(fname, lname);
        this.phone = phone;
        this.memberShip = memberShip;
    }

    message (){
        return `Hello ${this.firstName} ${this.lastName} ~ Congratulations Your order is ready`;
    }
}

let person1 = new Person("Roman", "Parvez");
console.log(person1.fullname());

let customer1 = new Customer("Nazrul", "Rana", "01783738978", "224234");
console.log(customer1);
console.log(customer1.message());