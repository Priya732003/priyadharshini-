var fruits = ["apple", "orange", "grapes"];
fruits.push("papaya");
fruits.pop();
fruits.forEach(function (fruit) {
    console.log(fruit);
});
var mixedList = [1, "priya", true];
mixedList.forEach(function (element) {
    console.log(element);
});
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var MySize = Size.Small;
console.log(MySize);
