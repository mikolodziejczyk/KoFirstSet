import { sprintf } from "sprintf-js";

interface QueryStringData {
    id: string;
    name: string;
}

export class MyApp {

    fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById("myFile");

    run() {
        console.log("Started.");

        this.fileInput.addEventListener("change", this.fileChanged);
    }

    fileChanged = async (event: UIEvent) => {
        console.log("File selected");

        let file: File = this.fileInput.files[0];


    };


}

let myApp: MyApp = new MyApp();
myApp.run();
