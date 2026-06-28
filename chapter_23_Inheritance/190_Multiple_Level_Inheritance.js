// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage
class BasePage {  // Grand Father
    constructor(name) {
        this.name = name;
    }
    open() {
        console.log("[OPEN] " + this.name);
    }
}
class AuthPage extends BasePage { // Father
    login(user) {
        console.log("[Login] " + user);
    }
}
class AdminPage extends AuthPage { // Son
    constructor() {
        super("Admin Panel")
    }
    manageUser() {
        console.log("[Admin] managing users")
    }
}

let admin = new AdminPage();
admin.open();
admin.login("Admin user logged in");
admin.manageUser();
