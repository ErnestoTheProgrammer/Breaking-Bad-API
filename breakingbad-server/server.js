const cors = require('cors');
const express = require('express');

const MongoClient = require('mongodb').MongoClient;

const config = require('./config.json');

const history = require('./history');

const search = require('./search');


const app = express();

//change port back to 8888
const port = 8888;

app.use(cors());
app.use(express.json());
app.use('/search', search);


app.use('/history', history);

//mongodb+srv://dbAdmin:<password>@cluster0.oqala.mongodb.net/?retryWrites=true&w=majority
const url = `mongodb+srv://${config.username}:${config.password}@${config.cluster}/${config.db_name}`;
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
    if (err) {
        throw new Error('Failed to connect to MongoDb');
    }

    console.log('Connected successfully to Mongo');

    app.locals.db = client.db();

    // start the server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
