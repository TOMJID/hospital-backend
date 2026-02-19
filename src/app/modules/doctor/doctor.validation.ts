import z from "zod";
import { UserGender } from "../../../generated/prisma/enums";

export const updateDoctorZodSchema = z
  .object({
    name: z
      .string("name is required")
      .max(36, "name must be under 36 characters"),
    contactNumber: z
      .string("contact number is required")
      .min(11, "contact number must be 11 digits")
      .max(14, "contact number must be under 14 digits"),
    address: z
      .string("address isn't valid")
      .max(100, "address is too long it must be under 100 characters")
      .optional(),
    experience: z
      .int("experience must be in number")
      .nonnegative("Experience can't be negative")
      .optional(),
    gender: z.enum(
      [UserGender.MALE, UserGender.FEMALE, UserGender.OTHER],
      "Gender must be one of FEMALE, MALE, OTHER",
    ),
    appointmentFee: z
      .number("Appointment fee is required")
      .nonnegative("Appointment fee can't be negative"),
    qualifications: z.array(z.string("Qualifications are required")),
    currentWorkingPlace: z.string("Current working place is required"),
    designation: z.string("Designation is required"),
  })
  .partial()
  .strict();
