function responseStatus(status) {

//   let status; // no need to declare here
  switch (status) {
    case 200:
      return "PASS - OK: Request successful";
      break;
    case 201:
      return "PASS - Created: Resource created successfully";
      break;
    case 301:
      return "WARNING - Moved Permanently: URL has changed";
      break;
    case 400:
      return "FAIL - Bad Request: Check request payload";
      break;
    case 403:
      return "FAIL - Forbidden: Insufficient permissions";
      break;
    case 404:
      return "FAIL - Not Found: Check endpoint URL";
      break;
    case 500:
      return "FAIL - Internal Server Error: Backend issue";
      break;
   default:
    return "UNKNOWN - Unhandled status code";
  }
  return status;
}

let result = responseStatus(404);
console.log(result);