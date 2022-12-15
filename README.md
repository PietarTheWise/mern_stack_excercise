# Mern stack excercise

MongoDB, React, Node.js, Express

This repo is based on a tutorial from a youtuber called net ninja. It is a web application, where you can save different workout routines. 
The backend is run with Node.js and Express, using MongoDB as database.
The frontend is built with React.js.

To run this application do the following steps:

1. clone this repository

2. Make a user in <a href="https://www.mongodb.com">https://www.mongodb.com</a> and create an api link.

3. Create .env file to the root of the backend folder and add the line:
```bash
MONGO_URI=<Your api link>
```

4. Open two instances of a terminal

5. On the root of the backend run the following on command line:
```bash
npm install
node server.js
```

6. On the second instance locate the root of the frontend and run the following on command line:
```bash
npm install
npm start
```
