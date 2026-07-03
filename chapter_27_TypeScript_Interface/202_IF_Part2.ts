interface APIResponse {
    body: string;
    headers?: object; // optional parameter hence ? is present
    responseTime?: number; // optional parameter hence ? is present
}


// if above optional parameters are present then NOT needed to add "header" and ResponseTime 
// in below declaration
let response1: APIResponse = {
    body: "Hi"  
} ;

let response2: APIResponse = {
    body: "Hello",
    headers: {},
    responseTime: 400
}

console.log(response2.body + ": " + response2.responseTime);