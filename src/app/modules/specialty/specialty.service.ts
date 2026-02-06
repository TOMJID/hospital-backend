import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

//* Create Specialty */
const createSpecialty = async (payload: Specialty) => {
  try {
    return await prisma.specialty.create({
      data: payload,
    });
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

//* get all Specialty */
const getAllSpecialty = async () => {
  try {
    return await prisma.specialty.findMany();
  } catch (error: unknown) {
    throw new Error((error as Error).message);
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
    throw new Error((error as Error).message);
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
    throw new Error((error as Error).message);
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
    throw new Error((error as Error).message);
  }
};

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialty,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialtyById,
};
