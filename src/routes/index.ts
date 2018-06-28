import {Router} from 'express';
import {testRoute} from './testRoute';

const registerApi = (router: Router) => {
  router.get('/default', testRoute);
};

export {registerApi};
