import { Request, Response, NextFunction } from "express";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

  if (err.response) return res.sendStatus(err.response.status);
  if (err.status) return res.status(err.status).send(err.message);
  return res.status(500).send(err);

};