let control;
function primeNumbers(...numbers){
    for(let i =0; i < numbers.length;i++){
        for(let j = 2; j < numbers[i]; j++ ){
            if(numbers[i] % j == 0){
                control = true;
                break;
            }
            else{
                control = false;
            }
        }
        if(control == true){
            console.log(numbers[i] + " sayısı asal değil.")

        } else{
            console.log(numbers[i] + " sayısı asal")
        }
    }
}
primeNumbers(1,2,3,4,5,6,7,8,9,11,13,17,23,29,30)