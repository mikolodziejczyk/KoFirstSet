import { sprintf } from "sprintf-js";

export class MyApp {

    nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
    filesInput: HTMLInputElement = <HTMLInputElement>document.getElementById("Files");
    sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");

    run() {
        console.log("Started.");

        this.sendButton.addEventListener("click", this.sendButtonClick);
    }

    sendButtonClick = async (event: UIEvent) => {
        console.log("Starting operation.");



    };



}

let myApp: MyApp = new MyApp();
myApp.run();
