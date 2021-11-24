let arr1 = [1, 2, 3, 4, 5];

function myFilter (arr, func) {
    let result = [];
    for (let item of arr){
        if(func(item)){
           result.push(item);
        } 
    }
    console.log(result);
    return result; 
}

myFilter(arr1, x => x<2);
myFilter(['cold', 'wanna sleep'], confirm);