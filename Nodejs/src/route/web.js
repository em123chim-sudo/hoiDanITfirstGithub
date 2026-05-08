import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) =>{
    app.use(router);
    router.get('/',homeController.getHomePage);
    router.get('/about',homeController.getAboutPage);
    


    return app.use("/",router);
}
module.exports = initWebRoutes;