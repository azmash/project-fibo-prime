# Project Collaboration

This project is build with Express.js using Pug. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers, formerly known as "Jade".

First of all, we need to install Express
```
npm install express-generator -g
```

To make a skeleton, we use Pug/Jade.
``` 
express *directory name* --view=pug
```

Then Pug will create some direktori, below we shown the directory hierarchy.
```
╭─evania@Evanias-MacBook-Air ~/project-collab/express-locallibrary-tutorial
╰─$ tree
.
├── app.js
├── bin
│   └── www
├── node_modules (containing 1000 more files/dorectory)
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   │   ├── fibo.js
│   │   └── largestprime.js
│   └── stylesheets
│       ├── asli.css
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```
At this point we already have a skeleton project.

To run the the project simply type
```
npm start
```
And access this code from browser
``` http://localhost:3000/ 
```

The project are built using Tailwind CSS, and it contains 2 problem that is A Fibonacci Even and Largest Prime Number.

We add an invalid argument exception so that user can only input number.