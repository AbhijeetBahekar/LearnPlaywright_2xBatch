class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeOut: number;

    constructor(baseURL: string,  apiKey: string, timeOut: number){
        this.baseURL=baseURL;
        this.apiKey=apiKey;
        this.timeOut=timeOut;
    }

    private getAuthHeader(): string {
        return "Bearer "+ this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("GET "+this.baseURL+path);
        console.log("Auth: "+this.getAuthHeader());
        console.log("TimeOut: " +this.timeOut+"ms");
    }
}

class UserAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users (timeout: "+ this.timeOut +"ms)");
        console.log("URL: " + this.baseURL+ "/users");
    }
}

let client = new APIClient("https://api.staging.com", "Key_Secret_123", 5000);
console.log("Base URL:", client.baseURL);
client.sendRequest("/health");