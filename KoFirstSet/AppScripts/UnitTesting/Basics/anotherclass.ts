export class AnotherClass {
    constructor() {
        console.log("An instance of AnotherClass created.");
    }

    static getPromise(result: string, shouldFail: boolean = false): Promise<string> {
        let p = new Promise<string>(function (resolve, reject) {
            window.setTimeout(function () {
                if (shouldFail) reject(); else resolve(result);
            }, 100);

        });

        return p;
    }
}