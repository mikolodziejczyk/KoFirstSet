export class MyApp {

    constructor() {
        console.log("Iterable and generators loaded...");

        let set: Set<string> = new Set(["Tom", "John", "Jenny"]);
        let map: Map<number, string> = new Map<number, string>([[1, "Tom"], [2, "Dick"], [3, "Harry"]]);

        let a: string[] = Array.from(["Tom", "John", "Jenny"]);
    }

    log(s: string) {
        document.write(`${s}<br/>`);
    }

    logObject(o: any, lead: string) {
        this.log(lead + " " + JSON.stringify(o));
    }
}

let myApp = new MyApp();
