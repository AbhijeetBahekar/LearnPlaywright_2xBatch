interface BugReport {
    id: number,
    title: string,
    severity: string,
    stepsToReproduce: string[]
};

const bugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["Step 1", "Step 2"]
};

const bugReport2: BugReport = {
    id: 2,
    title: "title",
    severity: "Medium",
    stepsToReproduce: ["Step 1", "Step 2"]
};

const bugReport3: BugReport = {
    id: 3,
    title: "title",
    severity: "Low",
    stepsToReproduce: ["Step 1", "Step 2"]
};

