let fruit = ['apple','orange',"banana","chiku"]
let myinfo = {name: "sakshi", age: 22, address:"pune"}

// traditional for : arrays when u need index based iteration, allow break and continue
for(let i=0 ;i<fruit.length; i++){
    console.log(i ,": ", fruit[i])
}

// for...in : used to loop over object properties(keys), not used with arrays since it include prototype properties
for(let key in myinfo){
    console.log(`${key} : ${myinfo[key]}`)
}

//for...of works on iterable like arrays, strings maps, sets
const stringname = "sakshiiii"
for(let char of stringname){
    console.log(char)
}   

// foreach : 
// Works only on arrays.
// Does not allow break or continue.
// Cannot be used with async/await properly.
const numbers = [10, 20, 30, 40];
numbers.forEach(num => {console.log(num)});
