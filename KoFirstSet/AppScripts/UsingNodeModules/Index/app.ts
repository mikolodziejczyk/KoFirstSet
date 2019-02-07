import * as escapeHTML from "escape-html"

export class MyApp {

    constructor() {
        let s = escapeHTML("<input ''/>")
        console.log(s);
    }
}

let myApp = new MyApp;