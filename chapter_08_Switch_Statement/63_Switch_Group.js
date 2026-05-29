let browser = "Firefox";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium project");
        break;
    case "Firefox":
        console.log("Mozilla Project");
        break;
    case "Safari":
        console.log("Apple project");
        break;
    default:
        console.log("Unknown Browser");
}