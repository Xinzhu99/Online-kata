/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.
For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
Let's look at another one.You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal. 
*/

let arr = [10,-80,10,10,15,35,20];

function findEvenIndex(arr) {
    arr.unshift(0);

    let sum1=0;
    let sum2 =0;
    let total =0;
    for (const nb of arr){
        total+=nb;
    };
    for (let j=1; j<arr.length;j++){
        sum1 += arr[j-1];

        sum2=total-sum1-arr[j];

        if (sum1 === sum2){
            return j-1
        };
    };
    return "-1";
};
console.log(findEvenIndex(arr))