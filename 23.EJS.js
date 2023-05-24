// @ts-ignore

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.get("", (_,resp) => {  // We are not using 'req' that's why we've put _ at the place of 'req'.
    resp.sendFile(`${publicPath}/index.html`);  // By using "sendFile" we are able to remove extention of file from the URL in the browser.
});

app.get("/about", (_,resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get("/Login", (_,resp) => {
    resp.render(`loginPage`);
});

app.get("/profiles", (_,resp) => {
    const user ={
        name: 'Milind Jarsaniya',
        email: 'milind@test.com',
        city: 'Rajkot',
        skills: ['C', 'C++', 'Java', 'JavaScript', 'Node.js', 'Express.js', 'Next.js', 'React.js', 'Angular.js']
    }
    resp.render('profiles', {user}); // 'profiles' represents the 'ejs' which is to be rendered.
});

app.get("*", (_, resp) => {  // "*" for all the URLs other than discribed above.
    resp.sendFile(`${publicPath}/page404.html`);
})

app.listen(5000);