export class MyApp {
    run() {
        console.log("Started.");

        let sendButton = document.getElementById("send-button");

        sendButton.addEventListener("click", this.send);
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
