import status from "http-status";
import { Specialty, UserRole } from "../../../generated/prisma/browser";
import AppError from "../../errorHelper/appError";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { IDoctorPayload } from "./userInterface";

const createDoctor = async (payload: IDoctorPayload) => {
  const { password, doctor } = payload;
  const specialties: Specialty[] = [];

  //? check specialty exists
  for (const specialtyId of payload.specialties) {
    const specialty = await prisma.specialty.findUnique({
      where: {
        id: specialtyId,
      },
    });

    if (!specialty) {
      throw new AppError(status.BAD_REQUEST, "Specialty not found");
    }

    specialties.push(specialty);
  }

  //? check user exists
  const userExists = await prisma.user.findUnique({
    where: {
      email: doctor.email,
    },
  });

  if (userExists) {
    throw new AppError(status.BAD_REQUEST, "User already exists");
  }

  //? create doctor

  const userData = await auth.api.signUpEmail({
    body: {
      email: doctor.email,
      password: password,
      role: UserRole.DOCTOR,
      name: doctor.name,
      needPassChange: true,
    },
  });

  try {
    const result = await prisma.$transaction(async (timeline) => {
      const doctorData = await timeline.doctor.create({
        data: {
          userId: userData.user.id,
          ...payload.doctor,
        },
      });

      const doctorSpecialtiesData = specialties.map((specialty) => {
        return {
          doctorId: doctorData.id,
          specialtyId: specialty.id,
        };
      });

      await timeline.doctorSpecialty.createMany({
        data: doctorSpecialtiesData,
      });

      const doctor = await timeline.doctor.findUnique({
        where: {
          id: doctorData.id,
        },
        select: {
          userId: true,
          name: true,
          email: true,
          profilePhoto: true,
          contactNumber: true,
          address: true,
          registrationNumber: true,
          experience: true,
          gender: true,
          appointmentFee: true,
          qualifications: true,
          currentWorkingPlace: true,
          designation: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              emailVerified: true,
              image: true,
              isDeleted: true,
              deletedAt: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          specialties: {
            select: {
              specialty: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
        },
      });

      return doctor;
    });
    return result;
  } catch (error) {
    console.log(error);
    await prisma.user.delete({
      where: {
        id: userData.user.id,
      },
    });
    throw new AppError(status.BAD_REQUEST, "Failed to create doctor");
  }
};

export const UserService = {
  createDoctor,
};
