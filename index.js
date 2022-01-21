const express = require('express');
// ('dotenv').configure();
const app = express();
const PORT = process.env.PORT || 5000;
// const sequelize = require('./database/connection');
const users = require('./routes/users');
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors());



app.use('/', users);


//listening

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
});