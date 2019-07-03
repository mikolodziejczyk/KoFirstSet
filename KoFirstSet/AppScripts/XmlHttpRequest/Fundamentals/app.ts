export class MyApp {
    run() {
        console.log("Started.");

        let sendButton = document.getElementById("send-button");

        sendButton.addEventListener("click", this.sendClick);
    }

    sendClick = async (event: UIEvent) => {

        let inputText = (<HTMLInputElement>document.getElementById("myText")).value;

        // we prepare data here
        let data: any = {};
        data.data = inputText;

    };


}

let myApp: MyApp = new MyApp();
myApp.run();
