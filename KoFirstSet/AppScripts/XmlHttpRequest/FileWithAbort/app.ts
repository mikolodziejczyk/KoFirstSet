import { sprintf } from "sprintf-js";

interface QueryStringData {
    id: string;
    name: string;
}

export class MyApp {

    fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById("myFile");
    timeoutInput: HTMLInputElement = <HTMLInputElement>document.getElementById("timeout");
    stopButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("stop-button");
    abort: () => void = () => { };

    run() {
        console.log("Started.");
        this.stopButton.disabled = true;
        this.fileInput.addEventListener("change", this.fileChanged);
        this.stopButton.addEventListener("click", (event: UIEvent) => {
            this.abort();
        });
    }

     fileChanged = async (event: UIEvent) => {
        console.log("File selected");

         let file: File = this.fileInput.files[0];
         let timeout: number = +this.timeoutInput.value;
         this.stopButton.disabled = false;

        let url: Url<QueryStringData> = new Url<QueryStringData>("http://localhost:50610/XmlHttpRequest/FileWithAbort_Post")
        url.query.id = "2BC2D0DC-9860-4434-ACF9-529F0990F153";
        url.query.name = file.name;

        console.log(`Posting to ${url.toString()}`);

        let progressCallback = (event: ProgressEvent): void => {
            if (event.lengthComputable) {
                let message = sprintf("Uploading: %.1f%%", (event.loaded * 100) / event.total);
                console.log(message);

            }
            else {
                console.log('Length not computable.');
            }
        }

         try {
            let promise: Promise<any>;
            promise = this.postData(url.toString(), file, timeout, progressCallback);
            let r = await promise;
            console.log("Upload complete.");
            console.log(r);
        }
        catch (e) {
            console.log("Upload error.");
         }

         this.stopButton.disabled = true;
         this.abort = null;
    };

    postData(uri: string, blob: Blob, timeout: number = 0, progressCallback?: (event: ProgressEvent) => void): Promise<any> {
        let abort: () => void;
        let promise = new Promise<any>((resolve, reject) => {
            let request: XMLHttpRequest = new XMLHttpRequest();


            request.onreadystatechange = function () {
                console.log(request.readyState);

                if (request.readyState === 4) {
                    if (request.status === 200) {
                        let response = JSON.parse(request.responseText);
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }
            }

            // the progressCallback must be set before request.open()!
            if (progressCallback) {
                request.upload.onprogress = progressCallback;
            }

            request.open("POST", uri);
            request.setRequestHeader("content-type", "application/octet-stream");
            request.send(blob);
        });

        return promise;
    }


}

let myApp: MyApp = new MyApp();
myApp.run();
