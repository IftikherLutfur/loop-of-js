function numbers(num1, num2, num3) {
    if(num1> num2 && num1> num3){
        return 'Number 1 is the Boss'
    }
    else if(num2>num1 , num2>num3){
        return 'Number 2 is big'
    }
    else{
        return 'Number 3 is ultimate boss'
    }
    
}
const number = numbers(250,50,299);
console.log(number);