/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import status from "http-status";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (envVars.NODE_ENV === "development") {
    console.log(err);
  }

  // eslint-disable-next-line prefer-const
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Something went wrong";
  let error: string = "Internal Server Error";

  if (err instanceof Error) {
    message = err.message;
    error = err.stack || "Internal Server Error";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
