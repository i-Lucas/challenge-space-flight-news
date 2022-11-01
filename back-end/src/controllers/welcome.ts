import { Request, Response } from "express";

export default function wellcome(req: Request, res: Response) {
  return res.status(200).send("Fullstack Challenge 2021 🏅 - Space Flight News");
};