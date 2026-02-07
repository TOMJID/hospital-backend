import { Request, Response } from "express";
import catchAsync from "../../share/catchAsync";
import { UserService } from "./user.service";
import { IDoctorPayload } from "./userInterface";
import sendResponse from "../../share/sendResponse";
import status from "http-status";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const payload: IDoctorPayload = req.body;
  const result = await UserService.createDoctor(payload);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Doctor created successfully",
    data: result,
  });
});

export const UserController = {
  createDoctor,
};
