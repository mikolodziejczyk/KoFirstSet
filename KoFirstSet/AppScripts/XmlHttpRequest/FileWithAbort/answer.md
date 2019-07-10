Answer
---

```

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
            // console.log(`Progress: ${event.loaded}/${event.total}`);
            let message = sprintf("Uploading: %.1f%%", (event.loaded * 100) / event.total);
            console.log(message);

        }
        else {
            console.log('Length not computable.');
        }
    }

        try {
        let promise: Promise<any>;
        [promise, this.abort] = this.postData(url.toString(), file, timeout, progressCallback);
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

postData(uri: string, blob: Blob, timeout: number = 0, progressCallback?: (event: ProgressEvent) => void): [Promise<any>, () => void] {
    let abort: () => void;
    let promise = new Promise<any>((resolve, reject) => {
        let request: XMLHttpRequest = new XMLHttpRequest();

        abort = () => {
            request.abort();
        }

        //request.onabort = (event: ProgressEvent) => {
        //    console.log("Aborting the request.");
        //    // seems that rejecting the promise will be handled by onreadystatechange
        //};

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
        request.timeout = timeout;
        request.setRequestHeader("content-type", "application/octet-stream");
        request.send(blob);
    });

    return [promise, abort];
}

```