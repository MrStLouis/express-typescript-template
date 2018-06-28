import './env';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import {registerApi} from './routes';

const {NODE_ENV = 'development'} = process.env;

const router = express.Router();
const app = express()
                .use(bodyParser.json())
                .use(bodyParser.urlencoded({extended: false}))
                .use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined'))
                .use(router)
                .use(cors());

registerApi(router);

export {app};
