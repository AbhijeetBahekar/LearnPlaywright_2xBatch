let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is ready");
    } else {
        reject("Order not ready due to rain");
    }
})
console.log(order);