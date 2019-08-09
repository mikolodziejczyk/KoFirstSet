import "moment";

export class MyApp {
    constructor() {
        console.log("Durations loaded...");
    }
}
 

let myApp: MyApp = new MyApp();
(<any>window).myApp = myApp;
