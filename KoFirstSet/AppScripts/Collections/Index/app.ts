import { Item } from "./item"

declare var ko: KnockoutStatic;

export class MyApp {
    initialize() {
        console.log("Initializing...");
        for (var i = 2010; i < 2020; i++) {
            // new Item(i);
        }
    }
}

let myApp: MyApp = new MyApp();
(<any>window).myApp = myApp;
myApp.initialize();