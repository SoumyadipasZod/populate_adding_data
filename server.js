
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// utlencoded
app.use(express.urlencoded({
    extended: true
}))

// set view engine
app.set('view engine', 'ejs')
app.set('views','views')

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// router
const WebRouter = require('./routes/web');
app.use(WebRouter)


// declare db connection
const dbDriver ="mongodb+srv://Soumyadip:Panja21031998@cluster0.cf1ge.mongodb.net/popolate"

// connection
const port =process.env.PORT ||7007;
mongoose.connect(dbDriver,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    app.listen(port,() =>{
        console.log(`db is connected`);
        console.log(`server running at http://localhost:${port}`)
    });
}).catch(error =>{
    console.log(error);
});