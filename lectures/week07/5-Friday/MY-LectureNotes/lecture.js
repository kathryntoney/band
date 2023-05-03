//* A server is a computer that can receive a request and then send it back out again.
//* Front end is always HTML, CSS, JS.  Things that can be run on the client's computer.
//* Back end languages are much more numerous, but they are almost always built on C# / C++.
//* Each browser has its own version of JS; Chrome's is called V8.
//* Node is kinda more C than it is JS, but we just don't realize it bc we interact with it using JS.
//* Node is a language built in JS that has a bunch of C bindings.
//* There are two different module systems, Node uses CommonJS - with React we'll use ES6.
//* Node is great for things like chat engines that need a lot of speed.
//* Asynchronous event-driven IO helps with concurrent request handling - it can receive multiple requests, and execute something in the background
//* while processing other requests.
//* Node uses the V8 JS Runtime Engine, which is associated with Google Chrome.
//* Node uses only one thread at a time, very minimal overhead on a single process.
//* Lots of big companies are using Node now.
//* Node is great when you need high levels of concurrency but not a lot of dedicated CPU time.  Best for usage in streaming or
//* event-based real-time applications:
//* Chat applications, gaming servers (not the games themselves), streaming servers, advertising servers, etc.
//* You should NOT use node if the server is doing heavy calculations.
//* Node is not a language, it just somehow runs JS.  It uses the v8 engine bundled with some libraries to do I/O and networking
//* so that you can use js outside of the browser.
//* Node allows js to be run without a browser.
//* It is bare bones, instead of sending you a bunch of stuff to begin with it has you pull on an as-needed basis.

//! shut down servers using ctrl+c
