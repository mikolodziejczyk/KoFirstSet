import { sprintf } from "sprintf-js";


export class MyApp {

    dataUrl: string = null;

    run() {
        console.log("Started.");

        let sendButton = document.getElementById("send-button");

        sendButton.addEventListener("click", this.sendClick);
    }

    sendClick = async (event: UIEvent) => {

        let inputText = (<HTMLInputElement>document.getElementById("myId")).value;

        // we prepare data here
        let data: any = {};
        data.id = +inputText;

        // prepare the progressCallback here
        /*
        let message = sprintf("Downloading: %.1f%%", downloadPercent);
        console.log(message);
         */
        // let progressCallback = (event: ProgressEvent): void => {

        let r: Blob = null;

        // call postData here with d as JSON payload, http://localhost:50610/XmlHttpRequest/RetrievingFile_Post


        if (r) {

            // adjust the response for an svg image here

            if (this.dataUrl) {
                URL.revokeObjectURL(this.dataUrl);
            }

            this.dataUrl = URL.createObjectURL(r);

            console.log(this.dataUrl);

            let img: HTMLImageElement = <HTMLImageElement>document.getElementById("previewImg");
            img.src = this.dataUrl;

            let downloadLink: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("downloadLink");
            downloadLink.href = this.dataUrl;
        }

    };

}

let myApp: MyApp = new MyApp();
myApp.run();
