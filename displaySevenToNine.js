display = () => {

    // display 7 to 9 all number----
    displaySevenToNine = () => {
        let i = 7;
        console.log(`Display 7 to 9`);
        while(i < 20){
            console.log(i);
            i++;
        }
    }
    displaySevenToNine();

    // display only even number from 7 to 9----
    findEvenNumber = () => {
        let j = 7;
        console.log(`Display only even number from 7 to 9`);
        while(j < 20){
            
            if(j%2==0){
                console.log(j);
            }
            j++;
        }
    }
    findEvenNumber();
}

display();