import { Request, Response } from "express";
import catchAsync from "../../share/catchAsync";

import sendResponse from "../../share/sendResponse";
import status from "http-status";
import { DoctorService } from "./doctor.service";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctors retrieved successfully",
    data: result,
  });
});

export const DoctorController = {
  getAllDoctors,
};
