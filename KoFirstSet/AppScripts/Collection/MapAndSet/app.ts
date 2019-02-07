class Item {
    constructor(public id: number, public name: string) {}
}


export class MyApp {
    constructor() {
        let stringData : Array<string> = ["Tom", "Dick", "Harry"];
        let pairs : Array<[number, string]> = [ [1,"Tom"], [2, "Dick"], [3, "Harry"]];
        let items : Item[] = [new Item(1, "Tom"), new Item(2, "Dick"), new Item(3, "Harry")];

        

        console.log("The map and set script loaded.");
    }
}

let myApp = new MyApp();
(<any>window).myApp = myApp;

