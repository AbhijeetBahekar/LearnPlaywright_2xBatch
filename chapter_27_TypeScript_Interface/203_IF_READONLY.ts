interface APIResponse {
    readonly statusCode: number;
    body: string;
    header?: object;
    responseTime?: number;
}
// readOnly
// Readonly - can't modify the readonly

// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user":"admin"}',
}

console.log("Status:",response.statusCode);
console.log("Body:",response.body);
console.log("Header:",response.header);

response.body = "database";