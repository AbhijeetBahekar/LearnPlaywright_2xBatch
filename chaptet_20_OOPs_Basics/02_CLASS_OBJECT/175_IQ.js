class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name+ " launched");
    }
    startBrowser() {
        console.log("Starting browser")
    }
    closeBrowser() {
        console.log("Browser is closed")
    }
}

let chrome = new Browser("Chrome"); // constructor will be called with name
let Firfox = new Browser("FireFox"); // constructor will be called with name

console.log(chrome.isOpen); // line 4 will be printed

// answer 
// Chrome launched
// FireFox launched
// true