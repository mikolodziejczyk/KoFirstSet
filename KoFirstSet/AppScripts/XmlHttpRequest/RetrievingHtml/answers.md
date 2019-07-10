Answers
---

postData(uri: string, data: any, timeout: number = 0): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
        let r: XMLHttpRequest = new XMLHttpRequest();

        r.onreadystatechange = function () {
            if (r.readyState === 4) {
                if (r.status === 200) {
                    let response = r.responseText;
                    resolve(response);
                }
                else {
                    // console.log(r.readyState);
                    // console.log(r.status);
                    reject();
                }
            }
        }

        r.ontimeout = (event: ProgressEvent): void => {
            console.log("Timeout ocurred.");
        };

        r.open("POST", uri);
        r.timeout = timeout;
        r.setRequestHeader("content-type", "application/json");
        r.send(JSON.stringify(data));
    });

    return promise;
}