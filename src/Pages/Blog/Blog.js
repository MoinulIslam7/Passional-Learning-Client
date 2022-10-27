import React from 'react';

const Blog = () => {
    return (
        <div className='mx-20 p-5'>
            <div className='mt-8'>
                <h2 className='text-3xl'>What is cors?</h2>
                <p className='text-justify'>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources. Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell the browser to let a web application running at one origin(domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.</p>
            </div>
            <div className='mt-8'>
                <h2 className='text-3xl'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-justify'>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. <br /> You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and password sign-in to your app.</p>
            </div>
            <div className='mt-8'>
                <h2 className='text-3xl'>How does the private route work?</h2>
                <p className='text-justify'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />This is a quick example of how to implement a private route component with React Router 6. The private route component is used to protect selected pages in a React app from unauthenticated users. <br /> The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            </div>
            <div className=' mt-8'>
                <h2 className='text-3xl'>What is Node? How does Node work?</h2>
                <p className='text-justify'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. <br /> 
                Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept and Asynchronous Non-blocking I/O.
                </p>
            </div>
        </div>
    );
};

export default Blog;