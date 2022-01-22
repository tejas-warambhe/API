# RESTFul APIs

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing


```
npm install 
```


### Executing program

dump the initialiseDatabase.sql commands in your db

Replace your own Database details in ../database/connection.js as well as in ../config

Use this command to migrate the users table
```
sequelize db:migrate
```
To start
```
npm start
```

Generate JWT token by sending body as 
{ 
    "name" : "admin"
    "password": "admin"
}

and Use Please provide the headers as
token : <YOUR GENERATED JWT TOKEN>
Content-type: application/json

for using update and insert routes


