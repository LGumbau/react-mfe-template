# Getting Started React Template for Micro-frontends

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It's stored at "link".

To create a project based on this template you can run the following command on your terminal. 

*Make sure you are on the wished directory.*

>npx ...

**Note: You should have [Node.js](https://nodejs.org/es/) installed.**

## Get started

Once you have the project ready in your text editor, open a terminal on the current directory and execute the following command:  
  

>npm install

That will install all the necessary dependencies...

This may take a while.

If all is going as expected, now your project will also contain a new directory, node_modules.

You can run your application using:
>npm start

Navigate to http://localhost:3000/ and you should see your app running. Edit a component file in src, save it, and the page should reload with your changes.


# Build our webpack
Let's start building our [webpack](https://webpack.js.org/), to do it, run this command:

>npm run buildWebpack

Now you should get a new directory called, dist.

# Start working with Micro-frontend

Once you created and filled the dist directory, you should copy the files generated on it and paste it on your micro-frontend project, the names of the files should be **app.bundle.js** and **app.bundle.js.map**.

