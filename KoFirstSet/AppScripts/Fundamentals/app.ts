declare var ko: KnockoutStatic;

export class MyApp {
    constructor() {

    }

    initialize() {
        console.log("Instance initialized.")
    }


}

jQuery(document).ready(() => {
    let myApp = new MyApp();
    window["myApp"] = myApp;
    myApp.initialize();
});

