# Introduction

This is a web application for the Tanda challenge. The tech stack is a ruby on rails backend, with a react SPA frontend, using the material UI library. It also uses JWT's to authenticate the users requests on the login screen.

# Getting started

To run the application, create two terminal windows. Change the directory into the source file for both the client and the server. Please see the instructions below for each of the applications.

## Client
Some comments on the client side. As stated, the client is using react with a material ui component library. In addition, it uses redux to manage state between the components, as well as to store the JWT in the local storage to authenticate a logged in users requests.
It is assumed that you have the latest version of nodejs and yarn installed. Run the following commands.

```
cd /client
yarn install
yarn start
```

This will start a local server on port 8080

## Server
Some comments on the server. The server is a ruby on rails application. It exposes API endpoints for the client to consume. In addition, it creates a has for the password, as well as a JWT using a credentials key. You will need to setup the credentials key on your local machine for the JWT to work (I have not committed this to github). To set up the credentials key, do the following:


It is assumed that you have the latest version of ruby and rails installed. Run the following commands

```
cd /server
cd /src
gem install
rails db:purge
rails db:migrate
rails s
```

This will start a local server on port 3000

## More information

If you would like to see all of the API endpoints which the rails app exposes, run the following command.

```
rails routes
```

This will give you a list of all of the routs on the rails app. You can then test these routes using Insomnia or Postman.

# General Architecture (server/datebase)

You can find out the general architecture for the backend here.
<img width="922" alt="Screen Shot 2021-05-24 at 10 14 47 pm" src="https://user-images.githubusercontent.com/38039863/119346519-a95a6500-bcdd-11eb-8629-901635563344.png">


# Futher comments

This challenge was done to address the requirements in these two challenges provided by Tanda [Backend](https://github.com/TandaHQ/work-samples/tree/master/adnat%20(backend)) and [Frontend](https://github.com/TandaHQ/work-samples/tree/master/adnat%20(react)). The additions which this application has according to the README file in the backend challenge are:

* A User can sign up to multiple organisations (HARD)
* Javascript enhancements (i.e react SPA)
* Datepicker for shift date field

This solution is a work in progress, and there are some bugs. In addition, not all of the API endpoints have the correct error handling required. These are for future improvements. In addition, the dockerfile has not been implemented yet.
