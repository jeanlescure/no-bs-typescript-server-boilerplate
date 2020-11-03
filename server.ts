import express from 'express';

// middleware
import auth from './src/auth';

// routes (should be kept as a single import)
import routes from './src';

const app = express();
const port = process.env.PORT || 3000;

// add global middleware here, otherwise do it within the respective
// route file
app.use(auth);

// keep this logic as is, any customization should happen within
// the respective route file
routes.forEach((r) => {
  app.use('/', r);
});

app.use(express.static('public'));

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
