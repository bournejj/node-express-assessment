# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the app

Clone the repository

### Commands

npm install 

npm start

### server

start up app on http://localhost:3000/

### run

use an api client like insomnia or postman 

### register 

Post request
http://localhost:3000/auth/register 

use this json schema below in the body to register

{
    "username": "",
	"password": "",
    "first_name": "",
    "last_name": "",
    "email": "",
	"phone": ""

}

### login


Post request
http://localhost:3000/auth/login

use this json schema below in the body to register

{
    "username": "",
	"password": ""
    
}

### routes

Get Request
http://localhost:3000/users/ - gets all users 

Get Request
http://localhost:3000/users/username - gets a user by surname

Patch Request
http://localhost:3000/users/username - make changes to users info using the same schema as to register

Delete Request
http://localhost:3000/users/username - Delete user

