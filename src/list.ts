const fruits:string[]=["apple","orange","grapes"];
fruits.push("papaya");
fruits.pop();
fruits.forEach(fruit=>{
    console.log(fruit);
})

const mixedList=[1,"priya",true];
mixedList.forEach(element=>{
    console.log(element);
})


enum Size{Small,Medium,Large};

let MySize=Size.Small

console.log(MySize)

