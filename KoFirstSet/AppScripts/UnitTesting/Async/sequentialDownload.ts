export class SequentialDownload {
    constructor(private shouldFail: boolean) {
        this.items = SequentialDownload.itemsSource.slice();
    }

    static failingItem: string = "Patti";
    static itemsSource : string[] = ["Tom", "Dick", "Harry", "Sue", SequentialDownload.failingItem, "Jenny", "John", "Adam", "Ann", "Betti"];
    private items: string[];


    getData(): Promise<string> {
        let p = new Promise<string>((resolve, reject) => {
            window.setTimeout(() => {
                let item = this.items.shift() || null;

                if (this.shouldFail && item === SequentialDownload.failingItem) {
                    reject();
                }
                else {
                    resolve(item);
                }
            }, 10);
        });
        return p;
    }

}