import http from 'http';

import {app} from './app';

const {SERVER_PORT = 3000} = process.env;

const server: http.Server = app.listen(SERVER_PORT, () => {
  console.log(`server started on port: ${SERVER_PORT}`);
});

export {server};
