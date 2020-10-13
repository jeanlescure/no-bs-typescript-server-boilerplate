import {
  Router,
  Request,
  Response,
} from 'express';

const router = Router();

router.get('/hello-world', (req: Request, res: Response) => {
  res.set('Content-Type', 'text/html');
  res.send(`
    <h1>Hello World</h1>
    <img src="/image.png"/>
  `);
});

export default router;
