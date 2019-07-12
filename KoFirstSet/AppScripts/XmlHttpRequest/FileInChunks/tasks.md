Uploading a file with XmlHttpRequest
---

Go to: http://localhost:50610/XmlHttpRequest/File

You have XmlHttpRequestController.File_Post that accepts a posted file and two parameters, string id (anything to simulate the upload origin), string name - the name of the uploaded file.

For names starting with K it returns an error.

In AppScripts / XmlHttpRequest / File / app.ts:

1. Create a method:
```
postData(uri: string, blob: Blob): Promise<any>
```
This should send the specified blob to the uri as application/octet-stream and get JSON response.

2. In fileChanged() you get file from the input[type=file]

a) Prepare uri with a query string, use jsUrl
Base is: "http://localhost:50610/XmlHttpRequest/File_Post"
Id = "2BC2D0DC-9860-4434-ACF9-529F0990F153";
Name = file.Name

b) Call postData with error handling
Log the json result to the console.

2. Upload progress
 - from where do you get upload progress events? What is the difference to downloand progress?
 - where in XmlHttpRequest procedure can you specify upload progress event?
 - extend the postData method so that is takes an optional uploadProgress callback; the callback should receive the ProgressEvent and returns nothing
 - in ileChanged() implement this callback, check whether the progress can be determined at all and if so, log the progress in the form:
```
let message = sprintf("Uploading: %.1f%%", progressInPercent);
console.log(message);
```

3. Controller theory
- how do you receive a file (single posted blob) in the controller method?
- where do you set limits on the file size?
- is the complete file loaded into memory before being dispatched to the controller method?
