/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
  return (
    <div className='mt-12 container'>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold'>1 . Tell us the differences between uncontrolled and controlled components.</h1>
        <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> : In React, there are two ways to manage form data: controlled components and uncontrolled components.
          <br />
          A controlled component is a component where the value of the form elements, such as input, select, or textarea, is controlled by React state. When the user interacts with the form element, the state is updated with the new value. This means that the form data is entirely managed by React, and any changes made to the form data can be tracked and handled by React. Controlled components are used when you need to perform some validation or data processing on the input value before using it.
          <br />
          On the other hand, an uncontrolled component is a component where the value of the form elements is managed by the DOM. The data is not stored in React state, but in the HTML DOM. When the user interacts with the form element, the data is directly updated in the DOM. This means that the form data is managed by the browser, and any changes made to the form data can only be tracked by reading the data from the DOM. Uncontrolled components are used when you need to get the value of the input quickly without any processing.
          <br />
          Here are some key differences between controlled and uncontrolled components:
          <br />
          In controlled components, the state is used to store and manage the form data, while in uncontrolled components, the DOM is used to store and manage the form data.
          <br />
          Controlled components are more flexible and offer better control over the form data, while uncontrolled components are simpler and offer less control over the form data.
          <br />
          Controlled components are usually used when you need to perform some validation or data processing on the input value before using it, while uncontrolled components are usually used when you need to get the value of the input quickly without any processing.
          <br />
          Controlled components require more code to implement than uncontrolled components, as you need to manage the state of the form data, while uncontrolled components are simpler to implement as you don't need to manage the state of the form data.</p>
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold'>2 .How to validate React props using PropTypes?</h1>
        <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> : Props and PropTypes are important mechanisms for passing read-only attributes between React components.
          <br />
          We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold'>3 .Tell us the difference between nodejs and express js.</h1>
        <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> : Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side. It provides an event-driven, non-blocking I/O model that makes it ideal for building scalable, high-performance web applications. Node.js has a built-in module system that allows you to easily create and use modules, making it easy to write reusable code.
          <br />
          Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, such as middleware for handling requests and responses, routing, and templating engines. Express.js makes it easier to create and organize a Node.js application, providing a simpler, more intuitive API for common tasks.
          <br />
          In other words, Node.js is the underlying runtime environment, while Express.js is a framework built on top of Node.js that provides additional functionality for building web applications. While it's possible to build web applications using just Node.js, using a framework like Express.js can save time and effort by providing pre-built functionality and a simpler API.</p>
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold'>4 . What is a custom hook, and why will you create a custom hook?</h1>
        <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> :A custom hook is a function in React that allows you to reuse logic across multiple components. Custom hooks are created by extracting stateful or side-effectful logic from a component and encapsulating it in a function. Custom hooks follow the same rules as React hooks, which means they can only be called at the top level of a functional component or another custom hook.
          <br />
          You would create a custom hook when you need to reuse some logic across multiple components. For example, if you have a piece of logic that needs to be used in multiple components, you can extract it into a custom hook and then call that hook from each of the components that need it. This can help keep your code DRY (Don't Repeat Yourself) and make it easier to maintain.
          <br />
          Some common use cases for custom hooks include:
          <br />
          Reusing API logic: If you have common API logic that needs to be reused across multiple components, you can extract it into a custom hook.
          <br />
          Reusing form logic: If you have a form that needs to be used in multiple components, you can extract the form logic into a custom hook.
          <br />
          Reusing stateful logic: If you have stateful logic that needs to be reused across multiple components, you can extract it into a custom hook.
          <br />
          In general, custom hooks are a powerful tool for building reusable logic in React. By creating custom hooks, you can simplify your code and make it easier to maintain, while also promoting good programming practices like code reuse and encapsulation.

        </p>
      </div>
    </div>
  );
};

export default Blog;