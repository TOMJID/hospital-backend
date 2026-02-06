import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to create specialty", error });
  }
};

export const SpecialtyController = {
  createSpecialty,
};
