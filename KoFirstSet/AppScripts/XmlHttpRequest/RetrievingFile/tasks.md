Uploading a file with XmlHttpRequest
---

Go to: http://localhost:50610/XmlHttpRequest/RetrievingFile

**Scenario:** We are posting JSON data and on this basis we generate a file on serwer. We retrieve the file as the server response.

You have XmlHttpRequestController.RetrievingFile_Post that accepts int id. This should come from json data. It returns a jpeg file for 1, 3 and an svg file for 2.

In AppScripts / XmlHttpRequest / RetrievingFile / app.ts:

1. Create a method:
```
postData(uri: string, data: any, progressCallback?: (event: ProgressEvent) => void): Promise<Blob> 
```
This should send the specified data as json payload and get blob response.
If specified, progressCallback sould be assigned to the download progress event.

2. 

- In sendClick invoke postData with prepared data and url 
http://localhost:50610/XmlHttpRequest/RetrievingFile_Post
When the file is retrieved, it should be assigned to the r variable.

- prepare the progress event

```
let message = sprintf("Downloading: %.1f%%", downloadPercent);
console.log(message);
```

- modify the response so that it works well with svg images

3. Controller theory
- how do you return a file?