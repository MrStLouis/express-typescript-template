import './env';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const {NODE_ENV = 'development'} = process.env;

const app: express.Express =
    express()
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: false}))
        .use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined'))
        .use(cors());

export {app};