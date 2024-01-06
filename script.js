//javascript objects
let person={
    name:"Karthika",
    age:24,
    place:"tvm"
}
console.log(person.name);
console.log(person.age);
console.log(person.place);
//using new keyword in js
let student=new Object();
student.name='Karthika';
student.age=24;
student.place='tvm';
console.log(student);
//object in another object

let pgclass={
    pg1:{
        strength:13,
        rep:'Thomas'
    }

}
console.log(pgclass.pg1.rep);
//array of objects
var arr1=[{name:'karthika',age:24,place:'tvm'},{name:'Keerthi',age:30,place:'kochi'},{name:'Sruthi',age:16,place:'kannur'}]
console.log(arr1[2].name);

//operators
var a=5;
console.log(a+=5);
var a=6;
var b=3;
console.log(a+b);
console.log(a-b);
//increemnt or decrement 
let i=7;
let j=i++;
console.log(i);
console.log(j);
//prefix increment
let x=7;
let y=++x;
console.log(x);

//conditional statement
if (x==y){
    console.log('the values are equal')
    
} else {'the values are not equal'
    
}
//problem1
var c=6;
var d=9;
if (c==d) {
    console.log('c is equal to d')}
    else if(c<d){
        console.log('c is less than d')
    
    }
    else{console.log('c is greater than d')}

   

// var c=10;
// var d=9;
// if (c==d) {
//     console.log('c is equal to d')}
//     else if(c<d){
//         console.log('c is less than d')
    
//     }
//     else{console.log('c is greater than d')}

    
// var c=9;
// var d=9;
// if (c==d) {
//     console.log('c is equal to d')}
//     else if(c<d){
//         console.log('c is less than d')
    
//     }
//     else{console.log('c is greater than d')}
//and opeator
if ((c<d)||(c==7)){
    console.log('the statement is true')}
    else{console.log('the condition check failed')}
//functions

function addition(nm1,nm2) {
    var sum=nm1+nm2;
    console.log("the sum is "+ sum); 
}
addition(5,6);

function add(n1,n2) {
    var sum=n1+n2;
    return sum;  
}
var result = add(6,4);
console.log(result);

//function subtraction
function difference(a,b) {
    var sub=a-b;
    console.log('the difference is '+ sub);
}
    difference(9,5);

//multiplication
function product(a,b) {
    var mult=a*b;
    console.log('the product is '+ mult);
}
    product(9,5);

//division
function division(a,b) {
    var div=a/b;
    console.log('the quotient is '+ div);
}
    division(9,5);
// //postfix
// let e=1;
// let f=e++;
// console.log(e);
// console.log(f);
// //prefix
// let g=1;
// let h=++g;
// console.log(g);
// console.log(h);

//looping statements
//write a program for printing the numbers from 1 to 10

for (let i= 0; i < 10; i++) {
    console.log(i+1);  
}
//array loop
let arr=['apple','orange','pineapple','strawberry','pappaya']
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);   
}

   //for of loop
for (x  of arr) {
    console.log(x);
} 
//for in loop

let person1 ={name:'karthika',age:24,place:'tvm'}
for (y in person1) {
    console.log(person1[y])
        
    }
//while loop
arr2=['monday','tuesday','wednesday','thursday','friday']
let k=0;
while (k<arr2.length){
    console.log(arr2[k]);
    k++;
}


