var hello = function (str) {
    return "Hello " + str;
};
console.log(hello("Shubham"));
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
}
doubleMe(4);
doubleMe("shubham");
