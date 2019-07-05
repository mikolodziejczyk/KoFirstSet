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

        let r: Blob = null;

        try {
            r = await this.postData("http://localhost:50610/XmlHttpRequest/RetrievingFile_Post", data);
            console.log("Data retrieved.");
        }
        catch (e) {
            console.log("Data retrieval error.");
        }

        if (r) {

            // this is required when retrieving an svg image
            // r = new Blob([r], { type: 'image/svg+xml' });


            if (this.dataUrl) {
                URL.revokeObjectURL(this.dataUrl);
            }

            this.dataUrl = URL.createObjectURL(r);

            console.log(this.dataUrl);

            let img: HTMLImageElement = <HTMLImageElement>document.getElementById("previewImg");
            img.src = this.dataUrl;
        }

    };

    postData(uri: string, data: any): Promise<Blob> {
        let promise = new Promise<any>((resolve, reject) => {
            let request: XMLHttpRequest = new XMLHttpRequest();

            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(request.response);
                    }
                    else {
                        reject();
                    }
                }
            }

            request.open("POST", uri);
            request.setRequestHeader("content-type", "application/json");
            request.responseType = "blob";
            request.send(JSON.stringify(data));
        });

        return promise;
    }

}

let myApp: MyApp = new MyApp();
myApp.run();
