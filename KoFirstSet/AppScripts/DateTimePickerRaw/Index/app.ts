import * as moment from '../../../node_modules/moment/moment'

export class MyApp {
    constructor() {
        console.log("Loaded...");
        const now: moment.Moment = moment.utc();
        let m : moment.Moment = moment('23/11/2009',"DD/MM/YYYY",true);
        let s = m.format("[Date is:] YYYY-MM-DD HH:mm:ss"); // "Date is: 2016-03-21 09:28:28"
        console.log(s);
        
    }
}



let myApp: MyApp = new MyApp();
(<any>window).myApp = myApp;
