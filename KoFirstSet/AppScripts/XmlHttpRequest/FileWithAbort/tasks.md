Uploading a file with XmlHttpRequest
---

Go to: http://localhost:50610/XmlHttpRequest/FileWithAbort

AppScripts/XmlHttpRequest/FileWithAbort/app.ts

You have a postData() method that uploads a file, to MyDocuments. For names starting with K it returns an error.
You want to test timeout and add abort capabilities.

In AppScripts/XmlHttpRequest/FileWithAbort/app.ts:

1. Request timeout: The postData() takes timeout, use it in the request. Mind where to set the timeout.
 - do you need any separate timeout handling? Do timeout apply to upload? Test it.

2. Aborting a request<br/>
   You have a MyApp.abort, that is called by the stop button.
 - modify postData() so that it returns a tuple [Promise<any>, () => void]
 - inside the postData() create a function (a fat-arrow method assigned to a variable) that aborts the request. Return this method along with the promise.
 - when calling postData() assign the returned method to myApp.abort and wait for the promise
 - do you need a separate abort handling? test?
 - add dedicated abort handling limited to logging to the console:
```
console.log("Aborting the request.");
```
