import { sprintf } from "sprintf-js";

interface IQueryStringData {
    id: string;
    name: string;
    isEnd: boolean;
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


       
    }

    // here we post a blob and get a JSON response
    // the method takes additional callback that is assigned to upload.onprogress
    postData(uri: string, blob: Blob, progressCallback?: (event: ProgressEvent) => void): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            let request: XMLHttpRequest = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        let response = JSON.parse(request.responseText);
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }
            };

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
