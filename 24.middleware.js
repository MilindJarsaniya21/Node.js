const express = require('express');
const reqFilter = require('./24.reqFilter_middleware');
const app = express();
const route = express.Router();


//Middleware
// const reqFilter = (req, res, next) => {
//     if(!req.query.age){
//         res.send("Please provide your age");
//     }
//     else if(req.query.age < 18){
//         res.send("You can not access this page.")
//     }
//     else{
//         next();
//     }
// }

// app.use(reqFilter); <<-- used to apply middleware on whole route.(App level middleware).
route.use(reqFilter); //  <<-- used to apply middleware on particular routes.(Route level middleware).

app.get("/", (req, res) => {
    res.send("Welcome to Home page");
})

route.get("/about", reqFilter,(req, res) => {
    res.send("Welcome to About page");
})

app.use('/',route);

app.listen(8080);