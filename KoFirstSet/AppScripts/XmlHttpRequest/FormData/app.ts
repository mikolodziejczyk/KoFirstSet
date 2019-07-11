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

        let formData: FormData = new FormData(); 
        formData.append("Name", this.nameInput.value);
        for(let file of Array.from(this.filesInput.files)) {
            formData.append("files", file);
        }

        

        try {
            let r = await this.postData("http://localhost:50610/XmlHttpRequest/FormData_Post", formData);
            console.log("Data retrieved.");
            console.log(r);
        }
        catch (e) {
            console.log("Data retrieval error.");
        }

    };

    postData(uri: string, data: FormData): Promise<any> {
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
            // r.setRequestHeader("content-type", "multipart/form-data");
            r.send(data);
        });

        return promise;
    }

}

let myApp: MyApp = new MyApp();
myApp.run();
