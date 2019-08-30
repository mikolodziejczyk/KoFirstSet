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


        let position: number = 0;
        let length: number = file.size;
        let chunkSize: number = 1 * 1024 * 1024;

        try {

            let isFinal: boolean = false;

            do {

                let currentChunkSize = chunkSize;
                if (position + currentChunkSize > length) {
                    currentChunkSize = length - position;
                }

                let chunk = file.slice(position, position + currentChunkSize, "application/octet-stream");

                position += currentChunkSize;

                isFinal = position >= length;

                // prepare additional data 
                let url: Url<IQueryStringData> = new Url<IQueryStringData>("http://localhost:50610/XmlHttpRequest/FileInChunks_Post");
                url.query.id = "2BC2D0DC-9860-4434-ACF9-529F0990F153";
                url.query.name = file.name;
                url.query.isEnd = isFinal;

                console.log(`Posting to ${url.toString()}`);


                let r = await this.postData(url.toString(), chunk, null);
                console.log("Upload complete.");
                console.log(r);
            }
            while (isFinal === false);

            console.log("Completed uploading");
        }
        catch (e) {
            console.log("Upload error.");
        }

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
