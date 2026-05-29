let testScore = 85;

switch(true){
    case testScore >= 95:
        console.log("Outstanding");
        break;
    case testScore >= 80:
        console.log("Excellent");
        break;
    case testScore >= 70:
        console.log("Good");
        break
    case testScore >= 60:
        console.log(" need improvement ");
        break;

    default:
        console.log("Unsatisfactory")
}