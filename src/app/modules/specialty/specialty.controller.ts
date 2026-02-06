import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import catchAsync from "../../share/catchAsync";
import sendResponse from "../../share/sendResponse";

//* Create Specialty */
const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.createSpecialty(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

//* get all Specialty */
const getAllSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.getAllSpecialty();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty retrieved successfully",
    data: result,
  });
});

//* get single Specialty by id */
const getSpecialtyById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialtyService.getSpecialtyById(id as string);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty retrieved successfully",
    data: result,
  });
});

//* update Specialty by id */
const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await SpecialtyService.updateSpecialty(id as string, payload);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty updated successfully",
    data: result,
  });
});

//* delete Specialty by id */
const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialtyService.deleteSpecialtyById(id as string);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty deleted successfully",
    data: result,
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty,
};
