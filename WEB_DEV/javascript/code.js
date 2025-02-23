let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4];
let arr3 = arr1; 
arr1.push(3);
console.log(arr1);//prints [1,2,3,4,3]
console.log(arr3);// also prints [1,2,3,4,3]
// beacuse both are refrencing the same array here ; 
//so changes reflecs in both the arrat; 