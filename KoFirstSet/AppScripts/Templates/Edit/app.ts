import { Entry } from  "./entry"

export class App {
    constructor() {
        
        for (let i = 1; i <= 12; i++) {
            this.entries.push(new Entry("2015-" + i.toString()));
        }

        this.entries()[0].amount("10");
        this.entries()[0].discount("5");

        ko.applyBindings(this);

        console.log("App started succesfully.");
    }

    entries : KnockoutObservableArray<Entry> = ko.observableArray<Entry>();

    save = () => {
        $("#saveTarget").text('Save entries as a string');
    }

}

let app = new  App();
window["myApp"] = app;
