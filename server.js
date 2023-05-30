const express = require("express")                    
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')  
 const Place = require("./mern-finall-project-back/models/place")
const placeData = require("./mern-finall-project-back/views/data")
const placeController = require("./mern-finall-project-back/controllers/place")


const app = express();

const port = 3000;


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());             //use .json(), not .urlencoded()
app.use(express.static("public"))    // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(cors({origin:"*"}))          // used to whitelist requests

app.use("/place", placeController)  // telling server.js to get the routes from controllers/movies.js


app.get('/seed', async (req, res) => {
    await Place.deleteMany({});
    await Place.insertMany(placeData);
    res.send('done!');
  });

app.listen(port, () => {
    console.log('U are connected', port)
  })