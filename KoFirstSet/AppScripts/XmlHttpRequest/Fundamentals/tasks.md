Using XMLHttpRequest for simple JSON post
---

Go to:
http://localhost:50610/XmlHttpRequest/Fundamentals

You have XmlHttpRequestController.Fundamentals_Post that accepts objects like:
```
{ data: "Sample text" }
```
For data==="Hello" it returns an error.

In AppScripts / XmlHttpRequest / app.ts

1. Create a method:
```
postData(uri: string, data: any): Promise<any>
```
Post any JS object (serializable to JSON) and returns deserialized response as a JS object.
The method should reject the promise on all errors.
- why can't you retrieve JS object directly.

2. In sendClick call this method, on success log the response object to the console, for an error just log a text "Error".

Test everthing for any text (success) and "Hello" (error).

