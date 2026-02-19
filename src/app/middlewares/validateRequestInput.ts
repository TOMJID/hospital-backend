import { NextFunction, Request, Response } from "express";
import z from "zod";

const validateRequestInput = (zodObject: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsedResult = zodObject.safeParse(req.body);

    if (!parsedResult.success) {
      next(parsedResult.error);
    }

    //? statalizing the data
    req.body = parsedResult.data;
    next();
  };
};

export default validateRequestInput;
