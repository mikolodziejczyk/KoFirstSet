Answer
---

```
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
        // do not set content-type
        r.send(data);
    });

    return promise;
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
```