function beforeSomething(target: any, key: string, desc: PropertyDescriptor) {
    let fn = desc.value;
    desc.value = () => (console.log("EAT"), fn());
    return desc;
}

function BeforeSomeSomeThing(target: any, key: string, desc: PropertyDescriptor) {
    let fn = desc.value;
    desc.value = () => (console.log("SLEEP"), fn());
    return desc;
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);