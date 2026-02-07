import { Request, Response } from "express";
import catchAsync from "../../share/catchAsync";
import sendResponse from "../../share/sendResponse";
import status from "http-status";
import { DoctorService } from "./doctor.service";

//? gets all doctors
const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctors retrieved successfully",
    data: result,
  });
});

//? gets doctor by id
const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    throw new Error("Doctor id is required");
  }
  const result = await DoctorService.getDoctorById(id as string);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor retrieved successfully",
    data: result,
  });
});

//? update doctor
const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  if (!id) {
    throw new Error("Doctor id is required");
  }

  const result = await DoctorService.updateDoctor(id as string, payload);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor updated successfully",
    data: result,
  });
});
export const DoctorController = {
  getAllDoctors,
  getDoctorById,
  updateDoctor,
};
