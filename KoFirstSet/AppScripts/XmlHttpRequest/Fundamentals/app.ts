export class MyApp {
    run() {
        console.log("Started.");

        let sendButton = document.getElementById("send-button");

        sendButton.addEventListener("click", this.sendClick);
    }

    sendClick = async (event: UIEvent) => {

        let inputText = (<HTMLInputElement>document.getElementById("myText")).value;

        try {
            let r = await this.getData(inputText);
            console.log("Data retrieved.");
            console.log(r);
        }
        catch (e) {
            console.log("Data retrieval error.");
        }
    };

    getData(inputData: string): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            let r: XMLHttpRequest = new XMLHttpRequest();

            r.onreadystatechange = function () {
                if (r.readyState == 4) {
                    if (r.status == 200) {
                        let response = JSON.parse(r.responseText);
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }
            }

            let data: any = {};
            data.data = inputData;
            let text = JSON.stringify(data);

            r.open("POST", "http://localhost:50610/XmlHttpRequest/Fundamentals_Post");
            r.setRequestHeader("content-type", "application/json");
            r.send(text);
        });

        return promise;
    }

    send = () => {
        console.log("Send clicked");

        let inputText = (<HTMLInputElement>document.getElementById("myText")).value;

        let r: XMLHttpRequest = new XMLHttpRequest();

        r.onreadystatechange = function () {
            console.log(r.readyState);
            if (r.readyState == 4) {
                if (r.status == 200) {
                    console.log(r.responseText);
                    let response = JSON.parse(r.responseText);
                    console.log(response);
                    //console.log(r.response);
                    //console.log(typeof(r.response));
                }
                else {
                    console.log("Failed");
                }
            }
        }

        let data: any = {};
        data.data = inputText;
        let text = JSON.stringify(data);

        r.open("POST", "http://localhost:50610/XmlHttpRequest/Fundamentals_Post");
        r.setRequestHeader("content-type", "application/json");
        r.send(text);
    }
}

let myApp: MyApp = new MyApp();
myApp.run();
