Using XMLHttpRequest for retrieving HTML with timeout
---

http://localhost:50610/XmlHttpRequest/RetrievingHtml

You have: 
http://localhost:50610/XmlHttpRequest/RetrievingHtml_Post
This takes a JSON object with data and after a few seconds returns some HTML.
Everyting is prepared.

1. Receiving html: In postData() return received HTML content instead of a fixed string.
2. Setting timeout: In postData() set timeout you receive as a method parameter.
- where (in which step) timeout must be set?
3. Default timeout handling: How do you handle timeout in the simplest way (a rejected promise)? Try it. 
4. Specialized timeout handling: Inside postData() add an event handler for a timeout that simply logs "timeout" to the console.
- where (in which step) the handler must be set?

