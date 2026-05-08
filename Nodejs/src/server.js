import express from 'express';
import bodyParser from 'body-parser';
import initWebRoutes from './route/web';
import viewEngine from './config/viewEngine';
import connectDB from './config/connectDB';

require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//port === undefined => port = 6969(neu chua khai thi thi mac dinh la 6969)

app.listen(port, ()=>{
    console.log("Backend Nodejs is runing on the port:" + port)
})