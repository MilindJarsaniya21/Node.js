// @ts-ignore

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.get("", (_,resp) => {  // We are not using 'req' that's why we've put _ at the place of 'req'.
    resp.sendFile(`${publicPath}/index.html`);  // By using "sendFile" we are able to remove extention of file from the URL in the browser.
});

app.get("/about", (_,resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

// app.get("/help", (_,resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// });

app.get("*", (_, resp) => {  // "*" for all the URLs other than discribed above.
    resp.sendFile(`${publicPath}/page404.html`);
})

app.listen(8080);