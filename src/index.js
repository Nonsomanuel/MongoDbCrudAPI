const express =require('express');
const {json} = require('express')
const connect = require('./config/database');
const userRoute = require('./router/userRoute')

connect()

const app = express();
app.use(json());
app.use('/user', userRoute);
app.use('/user/:id', userRoute);

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("My first demo on MongoDb");
});

app.listen(PORT, () => console.log(`Serving on port${PORT}`));