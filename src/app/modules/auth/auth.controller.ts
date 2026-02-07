import { Request, Response } from "express";
import catchAsync from "../../share/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../share/sendResponse";

//? register patient
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

//? login user
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "User logged is successfully",
    data: result,
  });
});

export const AuthController = {
  registerPatient,
  loginUser,
};
