const express = require('express');
const connectDB= require('./config/db');
const router= require('./config/db');
const app = express();

connectDB();

app.use('/api', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    connectDB();
    console.log("server is running");
});