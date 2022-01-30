let studentInfo = {
    firstName: "AM",
    lastName : "Antor",
    dob      : "20-12-1999",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(studentInfo.fullName());