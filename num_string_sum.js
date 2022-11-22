function numStringSumofNums(input_string){
    let sum = 0;
    
    // method 1
    for(let i in input_string){
        if(isNaN(input_string[i])==false){
            sum+=Number(input_string[i]);
        }
    }

    // method 2
    // for(let i in input_string){
    //     console.log(input_string[i]);
    //     if(input_string[i] >="1" && input_string[i] <="9" ){
    //         sum+=Number(input_string[i]);
    //     }
        
    // }

    // using 1 to 9 
    return sum;
}

const newStringofNums = "1,3,545,6767,8,9-9,9994_33$$33,33!334";
// We need a sum of all the numbers
console.log("Total Sum is " , numStringSumofNums(newStringofNums));
