export class Repository {
    public getText(input: string, shouldFail: boolean): Promise<string> {
        let p = new Promise<string>((resolve, reject) => {
            window.setTimeout(() => {
                if (!shouldFail) {
                    resolve(input);
                }
                else {
                    reject();
                }
            }, 10);

        });

        return p;
    }

    public  getLength(input: string, shouldFail: boolean): Promise<number> {
        let p = new Promise<number>((resolve, reject) => {
            window.setTimeout(() => {
                try {
                    if (!shouldFail) {
                        resolve(input.length);
                    }
                    else {
                        reject();
                    }
                }
                catch (e) {
                    reject();
                }
            }, 10);

        });

        return p;
    }

}
