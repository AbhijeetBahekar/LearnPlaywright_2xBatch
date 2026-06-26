class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Open the page");
    }
    close() {
        console.log("Close the browser");
    }
}

class LoginPage extends BasePage {
    open() {
        console.log("Open the page, child");
    }

}

const page = new LoginPage();
page.open();
page.close();