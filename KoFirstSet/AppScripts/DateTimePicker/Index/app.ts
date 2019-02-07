declare var ko : KnockoutStatic;

export class App {
    constructor() {
        ko.applyBindings(this);
    }

    date : KnockoutObservable<Date> = ko.observable(null);
    minDate : KnockoutObservable<Date> = ko.observable(new Date(2015, 10, 20));
    maxDate : KnockoutObservable<Date> = ko.observable(new Date(2017, 1, 25));
}

let app : App = new App();
window["myApp"] = app;