Uploading a file in chunks with XmlHttpRequest
---

Scenario: We want to be able to upload v. large files but without exceeding request size limits.


Go to: http://localhost:50610/XmlHttpRequest/FileInChunks

You have XmlHttpRequestController.FileInChunks_Post that accepts a posted file and three parameters,
- string id (anything to simulate the upload origin),
- string name - the name of the uploaded file,
- isEnd - this is the end of the upload
The controller method appends to the file (the file is actually identified by its name but in real-life scenario it would be by the id). IsEnd does nothing but in real life it would trigger processing.


In AppScripts / XmlHttpRequest / FileInChunks / app.ts:

In fileChanged() you get file from the input[type=file]

1. Prepare variables
- position - the current position in the file, initially 0
- length - set it to the file length
- chunkSize: number =  1 * 1024 * 1024;
- isFinal: boolean = false;
2. Wrap the whole uploading loop in try / catch

3. Write the uploading loop (e.g. do / while)
- add a variable (currentChunkSize), calculate it for the current iteration (chunkSize or less)
- create a blob variable chunk, read a fragment of the file as "application/octet-stream"
  - what are parameters - chunk length or end offset?
- advance position
- calculate is final
- prepare uri with a query string, use jsUrl
Base is: "http://localhost:50610/XmlHttpRequest/FileInChunks_Post"
Id = "2BC2D0DC-9860-4434-ACF9-529F0990F153";
Name = file.Name
isEnd = isFinal;
- call postData with error handling
Log the json result to the console.
- repeat the loop while isFinal is false
- add some logging after each chunk and on success and error
``
console.log(`Posting to ${url.toString()}`);
console.log("Upload complete.");
console.log("Completed uploading");
console.log("Upload error.");
``


3. Controller theory
- if the way of receiving blob in the controller method different that when you receive the whole file?
