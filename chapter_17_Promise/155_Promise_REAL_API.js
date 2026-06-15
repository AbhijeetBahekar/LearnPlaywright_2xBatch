let apiCall = new Promise( function (resovle, reject) {
    resovle ({
        status: 200, body: "User data"
    })
});
apiCall.then(function (response) {
    console.log(response.status);
    console.log(response.body);
    console.log(response);
});