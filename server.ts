import fs from 'fs';
import express, { Request, Response } from 'express';

import auth from './src/auth';

import routes from './src';

const app = express();
const port = process.env.PORT || 3000;

app.use(auth);

routes.forEach((r) => {
  app.use('/', r);
});

app.use(express.static('public'));

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
