import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  // implement your authorization middleware logic here
  console.log('Running auth middleware');

  if (!req.headers) {
    return res.status(401).send('Unauthorized');
  }

  next();
};
