const express = require('express');
const Routes = require('./source/route')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('M. Ilham Ramadhan');
})

app.use('/', Routes);

app.listen(port, console.log(`app listening on port ${port}`));
module.exports = app;