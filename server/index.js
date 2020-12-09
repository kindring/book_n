const express = require('express');

const { router } = require('./router/index');
console.log(router);
const app = express();


app.use(router);

app.get('/hello', (req, res) => {
    console.log('abc');
    res.send('Hello World!')
});

module.exports = {
    path: 'api',
    handler: app
}