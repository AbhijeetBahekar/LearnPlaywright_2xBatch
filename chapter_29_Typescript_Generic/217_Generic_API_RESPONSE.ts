function wrapResponse<T> (statusCode: number, data: T) : { statusCode: number; data: T } {
    return {statusCode: statusCode, data: data};
}

let userResp = wrapResponse<string>(200, "Admin");
console.log(userResp);
console.log(userResp.statusCode, userResp.data);

let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);