const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');


// create a database connection
mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.43fvt.mongodb.net/`
)
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json);

app.listen(PORT, ()=> console.log(`Server is now running on port ${PORT}`))
