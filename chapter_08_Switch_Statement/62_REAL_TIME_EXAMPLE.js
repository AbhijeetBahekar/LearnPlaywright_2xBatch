let responseCode = 400;

switch(responseCode){

    case 200:
        console.log("200 is OK");
        break;
    case 404:
        console.log("404 page not found");
        break;
    default:
        console.log("StatusCode mismatch");
}