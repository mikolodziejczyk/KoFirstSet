export class Address {
    constructor(address1: string, city: string)
    {
        this.address1(address1);
        this.city(city);
    }

    address1: KnockoutObservable<string> = ko.observable<string>();
    city: KnockoutObservable<string> = ko.observable<string>();
}