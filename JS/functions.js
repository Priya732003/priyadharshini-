//Functions - performs specific task
//            can be called multiple times
//            optionally takes input as 
//            parameters and optionally
//            returns value

//function declaration
function isPositive(num){//parameter
    return num>0
}

console.log(isPositive(-4))//argument

function sayHello(){
    console.log('hello')
}

sayHello()
//hoisting
// JavaScript Hoisting refers to the 
// process whereby the interpreter appears
// to move the declaration of functions, 
// variables or classes to the top of their
// scope, prior to execution of the code
console.log(findProduct(4,7)) 

function findProduct(a,b){
    return a*b
}


console.log(findProduct)
console.log(typeof findProduct)

//default parameters
// function greet(name='there'){
//     console.log('hi',name)
// }

// greet('Ram')
// greet()

//recursion - function calling itself
//factorial - product of first n numbers
//5! = 5*4*3*2*1 = 5*4*3*2*1
function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(5))

//function expression
//assigned to a variable as object

let isEven = function(num){
    return num%2==0
}
console.log(isEven(5))
console.log(isEven)

let arr = [ 2, 3, 5, 6, 10]
let findSum = function(arr){
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}

console.log(findSum(arr))

// let volume = function(l,b,h){
//     return l*b*h
// }

//arrow function
let volume = (l,b,h) => l*b*h
console.log(volume(7,8,9))

//console.log(arr)
let sumOfArr = arr =>{
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
//console.log(sumOfArr(arr))

//area of circle
let area = r => Math.PI*r*r
console.log(area(5))

//console.clear()
//variable arguments - rest parameters
let prod = function(...args){
    let result = 1
    for(let val of args)
        result *= val
    return result 
}
console.log(prod)
let prod2 = function(){
    let result = 1
    for(i=0;i<arguments.length;i++)
      result *= arguments[i]
    return result 

}

//console.log(prod2(7,6,5,4))

//Generators - generates value one by one

function* indexGenerator(){
    let index = 1
    while(true){
        yield index++
    }
}

const gen = indexGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//console.clear()

//callback - Function passed as argument

function greetConsole(name){
    console.log('hello',name)
}

function greet(callback){
    console.log(callback)
    callback('Ram')
}

greet(greetConsole)

console.clear()


//Foreach
arr = ['deepa','suresh','ramya']

arr.forEach(print)

function print(val){
    console.log(val.toUpperCase())
}

arr.forEach(val => console.log(val.toUpperCase()))
console.log(arr)

arr.forEach((val,index,arr)=>{
    arr[index] = val.toUpperCase()
})

console.log(arr)


console.clear()


//map - executes callback for each array
//      element and returns new array
let priceUSD = [20,35,13]
let priceINR = priceUSD.map(x => x *83)
console.log(priceINR)

priceINR = priceUSD.map(convert)

function convert(val){
    return val*83
}

console.log(priceINR)

const input = [ //array of objects
            {name:'John',age:15},
            {name:'Radha',age:45},
            {name:'Kaushik',age:12},
            {name:'Anu',age:21},
            {name:'Divya',age:26}
              ]

const ages = input.map( x => x.age)
console.log(ages)


//filter - returns new array by checking
//        each value of original arr using
//        call back fn

let cost = [35,234,12,34,54,123]

let lessThan100 = cost.filter( x => x<100)
console.log(lessThan100)

//reduce - executes reducer callback
//       and returns accumulated result
//arr.reduce(callback[, initialValue])
//reduce(function (accumulator, currentValue, currentIndex, array)) 

cost = [35,234,12,34,54,123]
let cartTotal = cost.reduce((total,el)=>total+el)
console.log(cartTotal)

arr2d = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

//result = {a:1,b:1,c:2,d:2...}


console.log(arr2d.flat())
let count = arr2d.flat().reduce(
    (accumulator,currVal) => {
        if(accumulator[currVal])
            accumulator[currVal]++
        else
            accumulator[currVal] = 1
        return accumulator
    }
    ,{});

console.log(count)
//console.clear()

let a1=100
function func1(){
    let b,c
    console.log('a is',a1)
}

func1()
a1 = 200
func1()

