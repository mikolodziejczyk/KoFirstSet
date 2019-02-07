import { Person } from "./person";


declare var ko: KnockoutStatic;

export class App {

    constructor() {
        this.people.push(new Person(1, "John", "Doe"));
        this.people.push(new Person(2, "Tom", "Smith"));
        this.people.push(new Person(3, "Jane", "Smith"));
        ko.applyBindings(this);

        console.log("MyApp started...");
    }

    cities : string[] = ["Katowice", "Bytom", "Chorzów", "Siemianowice Śląskie"];
    people : KnockoutObservableArray<Person> = ko.observableArray<Person>();
}

let myApp: App = new App();

window["myApp"] = myApp;