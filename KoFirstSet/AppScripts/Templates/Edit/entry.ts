export class Entry {
    constructor(public date : string)
    {

    }

    amount: KnockoutObservable<string> = ko.observable<string>();
    discount:  KnockoutObservable<string> = ko.observable<string>();
}