export class Item {
    constructor(_year: number) {
        this.year(_year);
    }

    year: KnockoutObservable<number> = ko.observable();
}