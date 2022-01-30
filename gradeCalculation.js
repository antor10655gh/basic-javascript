gradeCalculation = function(marks){
    if(80 <= marks && marks <=100){
        console.log(`Your Grade Is: A+`);
    }

    else if(70 <= marks && marks <= 79 ){
        console.log(`Your Grade Is: A`);
    }

    else if(60 <= marks && marks <= 69){
        console.log(`Your Grade Is: A-`);
    }

    else if(50 <= marks && marks <= 59){
        console.log(`Your Grade Is: B`);
    }

    else if(40 <= marks && marks <= 49){
        console.log(`Your Grade Is: C`);
    }

    else if(33 <= marks && marks <= 39){
        console.log(`Your Grade Is: D`);
    }

    else{
        console.log(`Your Grade Is: F`);
    }
}


let marks = 82;
gradeCalculation(marks);
