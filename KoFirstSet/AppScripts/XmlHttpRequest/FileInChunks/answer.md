Answer
---

```
fileChanged = async (event: UIEvent) => {
    console.log("File selected");

    let file: File = this.fileInput.files[0];


    let position: number = 0;
    let length: number = file.size;
    let chunkSize: number =  1 * 1024 * 1024;

    try {

        let isFinal: boolean = false;

        do {

            let currentChunkSize = chunkSize;
            if (position + currentChunkSize > length) {
                currentChunkSize = length - position;
            }

            let chunk = file.slice(position, position+currentChunkSize, "application/octet-stream");

            position += currentChunkSize;

            isFinal = position >= length;

            // prepare additional data 
            let url: Url<QueryStringData> = new Url<QueryStringData>("http://localhost:50610/XmlHttpRequest/FileInChunks_Post")
            url.query.id = "2BC2D0DC-9860-4434-ACF9-529F0990F153";
            url.query.name = file.name;
            url.query.isEnd = isFinal;

            console.log(`Posting to ${url.toString()}`);


            let r = await this.postData(url.toString(), chunk, null);
            console.log("Upload complete.");
            console.log(r);
        }
        while (isFinal === false)

        console.log("Completed uploading");
    }
    catch (e) {
        console.log("Upload error.");
    }

};

```