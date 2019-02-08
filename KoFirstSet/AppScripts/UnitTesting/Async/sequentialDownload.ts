export class SequentialDownload {
    public static failingItem: string = "Patti";
    public static itemsSource: string[] = ["Tom", "Dick", "Harry", "Sue", SequentialDownload.failingItem, "Jenny", "John", "Adam", "Ann", "Betti"];
    private items: string[];
    constructor (private shouldFail: boolean) {
        this.items = SequentialDownload.itemsSource.slice();
    }

    public getData(): Promise<string> {
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
