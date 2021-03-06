import express from "express";
import config from "config";

// utils
import connect from './utils/connect';
import logger from './utils/logger';

const port = config.get<number>("port")

const app = express();

app.listen(port,  async () =>{
    logger.info(`App is runnig at http://localhost:${port}`)
    await connect();
})