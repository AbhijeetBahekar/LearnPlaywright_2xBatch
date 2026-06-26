class Student {
    constructor(name_student, age, phone) {
        this.name_student = name_student;
        this.age = age;
        this.phone = phone;
    }
    static name = "Playwright";
    static mentor_name = "Proamodee";

    static display() {
        console.log("Hi, I a, common f(n)");
    }
}

const s1 = new Student("James", 33, "9900990099");
const s2 = new Student("Tames", 23, "0099223344");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(s1);
console.log(s2);

console.log(Student.name);
console.log(Student.mentor_name);