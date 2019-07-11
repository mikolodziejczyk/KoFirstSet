Uploading FormData with XmlHttpRequest
---

Go to: http://localhost:50610/XmlHttpRequest/FormData

You have XmlHttpRequestController.FormData_Post that accepts a posted form and a parameter name (this simulates data of arbitrary length).
It saves posted files in MyDocuments and returns a collection of their path and the name parameter.

In AppScripts / XmlHttpRequest / FormData / app.ts:

1. Create a method:
```
postData(uri: string, data: FormData): Promise<any>
```
This should send the FormData to the uri and get JSON response.
- what should be the content type

2. In sendButtonClick() 
- create a FormData instance
- add "name" with this.nameInput.value
- add "files" with all files from this.filesInput.files (i.e. as many "files" entries as there are files selected)
- call postData and log the json result to the console.

3. Controller theory
- how do you form data? Simple values? Files?
- is the complete file loaded into memory before being dispatched to the controller method?

