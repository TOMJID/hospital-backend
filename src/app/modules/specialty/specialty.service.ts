import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty) => {
  try {
    return await prisma.specialty.create({
      data: payload,
    });
  } catch (error: unknown) {
    throw new Error("Failed to create specialty: " + (error as Error).message);
  }
};

export const SpecialtyService = {
  createSpecialty,
};
