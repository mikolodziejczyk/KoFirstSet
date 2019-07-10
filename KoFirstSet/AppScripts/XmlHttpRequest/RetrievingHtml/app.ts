export class MyApp {
    run() {
        console.log("Started.");

        let sendButton = document.getElementById("send-button");

        sendButton.addEventListener("click", this.sendClick);
    }

    sendClick = async (event: UIEvent) => {

        let inputText = (<HTMLInputElement>document.getElementById("myText")).value;
        let timeout = +(<HTMLInputElement>document.getElementById("timeout")).value;

        console.log(`Timeout: ${timeout}`);

        // we prepare data here
        let data: any = {};
        data.data = inputText;

        try {
            let r = await this.postData("http://localhost:50610/XmlHttpRequest/RetrievingHtml_Post", data, timeout);
            console.log("Data retrieved.");
            // console.log(r);
            document.getElementById("retrievedContent").innerHTML = r;
        }
        catch (e) {
            console.log("Data retrieval error.");
            document.getElementById("retrievedContent").innerHTML = "Data retrieval error."
        }


    };

    postData(uri: string, data: any, timeout: number = 0): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            let r: XMLHttpRequest = new XMLHttpRequest();

            r.onreadystatechange = function () {
                if (r.readyState === 4) {
                    if (r.status === 200) {
                        let response = "Some fixed text"; // replace it with the HTML received
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }
            }

            r.open("POST", uri);
            r.setRequestHeader("content-type", "application/json");
            r.send(JSON.stringify(data));
        });

        return promise;
    }

}

let myApp: MyApp = new MyApp();
myApp.run();
