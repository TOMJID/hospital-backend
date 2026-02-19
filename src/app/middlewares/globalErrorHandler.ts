import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import status from "http-status";
import z from "zod";

export const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (envVars.NODE_ENV === "development") {
    console.log(err);
  }

  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Something went wrong";
  let error: string = "Internal Server Error";
  const errorSource: { path: string; message: string; code: string }[] = [];

  if (err instanceof z.ZodError) {
    statusCode = status.BAD_REQUEST;
    message = "Zod Validation error";

    err.issues.forEach((issue) => {
      errorSource.push({
        path: issue.path.join(" -> ") || "root",
        message: issue.message,
        code: issue.code,
      });
    });

    error = "Validation Error";
  } else if (err instanceof Error) {
    message = err.message;
    error =
      envVars.NODE_ENV === "development"
        ? err.stack || "Internal Server Error"
        : "Internal Server Error";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: envVars.NODE_ENV === "development" ? error : "Internal Server Error",
    errorSource,
  });
};
