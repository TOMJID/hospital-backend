import { Request, Response } from "express";
import catchAsync from "../../share/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../share/sendResponse";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.registerPatient(payload);

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "User created SUccessfully",
    data: result,
  });
});

export const AuthController = {
  registerPatient,
};
