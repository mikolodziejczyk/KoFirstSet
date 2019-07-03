Answers
---

```

sendClick = async (event: UIEvent) => {

let inputText = (<HTMLInputElement>document.getElementById("myText")).value;

    // we prepare data here
    let data: any = {};
    data.data = inputText;

    try {
        let r = await this.postData("http://localhost:50610/XmlHttpRequest/Fundamentals_Post", data);
        console.log("Data retrieved.");
        console.log(r);
    }
    catch (e) {
        console.log("Data retrieval error.");
    }
};

postData(uri: string, data: any): Promise<any> {
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
        r.setRequestHeader("content-type", "application/json");
        r.send(JSON.stringify(data));
    });

    return promise;
}

```