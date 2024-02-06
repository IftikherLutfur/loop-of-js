const height = [ 60,65,78,45,80,88];
   function getMax(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if(number < min){
            min = number;
        }
    }
    return min;
   }
   const max = getMax(height) ;
   console.log('max value is',max)