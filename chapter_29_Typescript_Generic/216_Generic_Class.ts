class TestDataStorage<T> {
    private items: T[] = []; 
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0]!;
    }
    getAll(): T[] {
        return this.items;
    }
    count(): number {
        return this.items.length;
    }
}

let statusCodeStore = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();

statusCodeStore.add(200);
statusCodeStore.add(404);
statusCodeStore.add(500);

testNameStore.add("Login Test");
testNameStore.add("CheckOut Test");

console.log("Codes:", statusCodeStore.getAll());
console.log("First code:", statusCodeStore.getFirst());


console.log("Tests:", testNameStore.getAll());
console.log("Test count:", testNameStore.count());