function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi your order is placed");
    pramodCallback();
}

// placeOrder("Pizza", print);

// second way annonimus

placeOrder("Burger", function() {
    console.log("Anonimus Function - Function without name")
});

// Third Way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});