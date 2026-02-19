import status from "http-status";
import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import AppError from "../../errorHelper/appError";

//* Create Specialty */
const createSpecialty = async (payload: Specialty) => {
  try {
    return await prisma.specialty.create({
      data: payload,
    });
  } catch (error: unknown) {
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      (error as Error).message || "Failed to create specialty",
    );
  }
};

//* get all Specialty */
const getAllSpecialty = async () => {
  try {
    return await prisma.specialty.findMany();
  } catch (error: unknown) {
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      (error as Error).message || "Failed to fetch specialties",
    );
  }
};

//* get Specialty by id */
const getSpecialtyById = async (id: string) => {
  try {
    return await prisma.specialty.findUnique({
      where: {
        id,
      },
    });
  } catch (error: unknown) {
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      (error as Error).message || "Failed to fetch specialty",
    );
  }
};

//* update Specialty by id */
const updateSpecialty = async (id: string, payload: Partial<Specialty>) => {
  try {
    return await prisma.specialty.update({
      where: {
        id,
      },
      data: payload,
    });
  } catch (error: unknown) {
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      (error as Error).message || "Failed to update specialty",
    );
  }
};

//* delete Specialty by id */
const deleteSpecialtyById = async (id: string) => {
  try {
    return await prisma.specialty.delete({
      where: {
        id,
      },
    });
  } catch (error: unknown) {
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      (error as Error).message || "Failed to delete specialty",
    );
  }
};

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialty,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialtyById,
};
