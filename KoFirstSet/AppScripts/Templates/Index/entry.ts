import { Address } from "./address";

export class Entry {
    constructor(firstName: string, lastName: string, from: string, to?: string, address1?: string, city?: string) {
        this.firstName(firstName);
        this.lastName(lastName);
        this.from(from);
        this.to(to);

        if (address1) {
            let address: Address = new Address(address1, city);
            this.address(address);
        }
    }

    firstName: KnockoutObservable<string> = ko.observable<string>();
    lastName: KnockoutObservable<string> = ko.observable<string>();
    from: KnockoutObservable<string> = ko.observable<string>();
    to: KnockoutObservable<string> = ko.observable<string>();
    address: KnockoutObservable<Address> = ko.observable<Address>();

}