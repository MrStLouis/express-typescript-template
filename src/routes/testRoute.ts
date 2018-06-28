import {RequestHandler} from 'express';

const testRoute: RequestHandler = (req, res) => {
  res.status(200).send('success');
};

export {testRoute};
