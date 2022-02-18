# Final Project Starter

This repository is here to work as a basis for your final project

## Installation and Setup

Install the npm dependencies
````
npm install
````

Setting up environment variables
1. Rename .env.EXAMPLE -> .env in the server folder
2. Update the jwt secret to a random value. This will be used to sign your json web tokens. If someone else knows what this is they will be able to login as anyone!

Rename the following files/folders to your application name
- The name property in package.json, client/package.json and server/package.json
- The root folder name
- In server/config/connection.js change the url database name to something that makes sense for your app. e.g. "mongodb://localhost/meal-tracker-db"
- In client/public/index.html update the <title> and <meta> tags to give your site a proper title and description

Change the user seeds if you wish.

## Running the application

If this is the first time running and you would like some test data, seeds can be run with:
````
npm run seed
````

To start in develop mode:
````
npm run develop
````
This will start both the front-end and backend in watch mode

To start the services independently:
Front end:
````
cd client && npm start
````

Back end:
````
cd server && npm watch
````


## Deployment

1. When deploying to heroku, make sure that you add the necessary environment variables (JWT_SECRET and MONGODB_URI) to the heroku settings