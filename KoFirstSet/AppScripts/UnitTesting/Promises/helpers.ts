export class Helpers {
    static BasicPromise(s: string): Promise<string> {
        let promise = new Promise<string>((resolve, reject) => {
            window.setTimeout(() => {
                try {
                    if (s === "test") {
                        reject();
                    }
                    else {
                        resolve(`Hello: ${s} ${s.length}.`);
                    }
                }
                catch {
                    reject();
                }
            }, 100);
        });

        return promise;
    }

    static LengthPromise(s: string): Promise<number> {
        let promise = new Promise<number>( (resolve, reject) => {
            window.setTimeout( () => {
                try {
                resolve(s.length);
                }
                catch {
                    reject();
                }
            }, 10);
        });

        return promise;
    }
}
