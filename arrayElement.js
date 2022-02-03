let food = ['aam', 'jaam', 'kathal', 'lichu'];
console.log(`Main array is----`);
console.log(food);
console.log();

foodArray = (food) => {
    numberOfValue = () => {
        let flength = food.length;
        console.log(`Number of Value: ${flength}`);
        console.log();
    }
    numberOfValue();

    valuChange = () => {
        console.log(`After change the value of array----`);
        food.splice(2,1, "papaya");
        console.log(food);
        console.log();
    }
    valuChange();

    valuRemove = () => {
        console.log(`After remove the value of array----`);
        food.splice(2,1);
        console.log(food);
        console.log();
    }
    valuRemove();
}

foodArray(food);

