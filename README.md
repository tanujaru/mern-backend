# Project’s Title:  Tour Tracker<br>
## Backend  Tour Tracker

In this project we have all the data for the Best place in the world for tourism and famous place according to the category like Amusement Parks, Historic Places, Beaches,Hikings all the data we will be storing in the Moongo DataBase System. We have all the Edit Delet And Create option so that we can update all our tourism Experience in the Project.


##  Description:<br>
![image](/Images/sshort1.png)

![image](/Images/sshort2.png)

(-)
## How to Use Your Project: 
### Installing Express
Firstly, install the Express framework globally using NPM so that it can be used to create a web application using node terminal.
Save the above code in a file named server.js and run it with the following command.
Request & Response
Express application uses a callback function whose parameters are request and response objects.
First clone the repository and then install all the NPM package  make sure to chack package.json file. 
>$ npm install express --save
    ```javascript
    cors": "^2.8.5",
    "dotenv": "^16.1.0",
    "express": "^4.18.2",
    "jsx-view-engine": "^1.0.0",
    "method-override": "^3.0.0",
    
    "mongoose": "^6.11.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
    ```





 ### $ node server.js<br>
 >var express      = require('express')
>var cookieParser = require('cookie-parser')

>var app = express()
>app.use(cookieParser())

>app.get('/', function(req, res) {
>console.log("Cookies: ", req.cookies)
>})
>app.listen(3000)

>$ npm install express --save
(-)
Data Base 
const mongoose = require('mongoose');

>const placeSchema = new mongoose.Schema({
   > name: { type: String, required: true },
    >about: { type: String, required: true },
    >state: { type: String, required: true },
    >country: { type: String, required: true },
    >category: { type: String, required: true },
    >Like: { type: Boolean },
    >image: { type: String }

>}, { timestamps: true });

>const Place = mongoose.model('Place', placeSchema);

>module.exports = Place;


## Techonology Used
React-Express
Moongo DB Data Base
Java Script
Html
React for Front End.


(-)
## Include Credits:
I thank All my Friend for helping me and for Good suggestions.<br>

---
## Motivation: 
I like Tours and Travell and that motivated me to develop this Project.<br>



## challenges: 
With all the updates we have to be very care full about the correct versions we are using and find the correct Data about the places that we are putting in the project.
## Author :

Thanks TR---li


