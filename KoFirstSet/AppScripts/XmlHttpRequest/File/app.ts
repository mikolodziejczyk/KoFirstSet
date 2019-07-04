export class MyApp {

    fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById("myFile");

    run() {
        console.log("Started.");

        this.fileInput.addEventListener("change", this.fileChanged);
    }

    fileChanged = async (event: UIEvent) => {
        console.log("File selected");

        let data: Blob = this.fileInput.files[0];

        try {
            let r = await this.postData("http://localhost:50610/XmlHttpRequest/File_Post?id=2BC2D0DC-9860-4434-ACF9-529F0990F153&name=test.dat", data);
            console.log("Upload complete.");
            console.log(r);
        }
        catch (e) {
            console.log("Upload error.");
        }

    };

    postData(uri: string, blob: Blob): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            let r: XMLHttpRequest = new XMLHttpRequest();

            r.onreadystatechange = function () {
                if (r.readyState === 4) {
                    if (r.status === 200) {
                        let response = JSON.parse(r.responseText);
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }
            }

            r.open("POST", uri);
            r.setRequestHeader("content-type", "application/octet-stream");
            r.send(blob);
        });

        return promise;
    }

}

let myApp: MyApp = new MyApp();
myApp.run();
