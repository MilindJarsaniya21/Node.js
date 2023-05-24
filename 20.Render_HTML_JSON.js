const express = require('express');
const app = express();

app.get("", (req,resp) => {
    resp.send(`
    <h1>Welcome, this is home page.</h1>
    <a href="/about">About Us</a>
    `);
});

app.get("/about", (req,resp) => {
    resp.send(`
    <input type="text" placeholder="Username" value="${req.query.name}"/>
    <button>Click Me</button>
    `);
    console.log(req.query.name);
});

app.get("/help", (req,resp) => {
    resp.send([{
        name: "Milind",
        email: "milind@test.com"
    },
    {
        name: "Sam",
        email: "sam@test.com"        
    }]);
});

app.listen(4500);