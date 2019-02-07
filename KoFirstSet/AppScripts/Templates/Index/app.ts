import { Entry } from "./entry";


export class App {

    constructor() {

        this.people.push(new Entry("John", "Doe", "2010-01-01"));
        this.people.push(new Entry("Jane", "Smith", "2010-01-01", "2015-12-01", "Unknown 1/1", "UnknownCity"));
        this.people.push(new Entry("Tom", "Smith", "2010-01-01", "2015-12-01"));

        ko.applyBindings(this);

        console.log("App started succesfully.");
    }

    people: KnockoutObservableArray<Entry> = ko.observableArray<Entry>();

    makeFirstInactive =  () => {
        this.people()[0].to("2016-01-31");
    }

}

let app = new  App();
window["myApp"] = app;
