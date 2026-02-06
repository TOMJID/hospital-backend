import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

//* Create Specialty */
const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);
    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
      error: (error as Error).message,
    });
  }
};

//* get all Specialty */
const getAllSpecialty = async (req: Request, res: Response) => {
  try {
    const result = await SpecialtyService.getAllSpecialty();
    res.status(200).json({
      success: true,
      message: "Specialty retrieved successfully",
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve specialty",
      error: (error as Error).message,
    });
  }
};

//* get single Specialty by id */
const getSpecialtyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SpecialtyService.getSpecialtyById(id as string);
    res.status(200).json({
      success: true,
      message: "Specialty retrieved successfully",
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve specialty",
      error: (error as Error).message,
    });
  }
};

//* update Specialty by id */
const updateSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const result = await SpecialtyService.updateSpecialty(
      id as string,
      payload,
    );
    res.status(200).json({
      success: true,
      message: "Specialty updated successfully",
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
      error: (error as Error).message,
    });
  }
};

//* delete Specialty by id */
const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await SpecialtyService.deleteSpecialtyById(id as string);
    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
      error: (error as Error).message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty,
};
