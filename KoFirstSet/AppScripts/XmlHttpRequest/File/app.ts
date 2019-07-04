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

        let url: Url<QueryStringData> = new Url<QueryStringData>("http://localhost:50610/XmlHttpRequest/File_Post")
        url.query.id = "2BC2D0DC-9860-4434-ACF9-529F0990F153";
        url.query.name = file.name;

        console.log(`Posting to ${url.toString()}`);

        let progressCallback = (event: ProgressEvent): void => {
            if (event.lengthComputable) {
                // console.log(`Progress: ${event.loaded}/${event.total}`);
                let message = sprintf("Uploading: %.1f%%", (event.loaded * 100) / event.total);
                console.log(message);

            }
            else {
                console.log('Length not computable.');
            }
        }

        try {
            let r = await this.postData(url.toString(), file, progressCallback);
            console.log("Upload complete.");
            console.log(r);
        }
        catch (e) {
            console.log("Upload error.");
        }

    };

    postData(uri: string, blob: Blob, progressCallback?: (event: ProgressEvent) => void): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            let request: XMLHttpRequest = new XMLHttpRequest();

            request.onreadystatechange = function () {
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
