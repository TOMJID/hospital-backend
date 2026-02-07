import { prisma } from "../../lib/prisma";
import { IUpdateDoctorPayload } from "./doctorInterface";

//? gets all doctors
const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
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
  return doctors;
};

//? gets dootor by id
const getDoctorById = async (id: string) => {
  const doctor = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
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
};

//? update doctor
const updateDoctor = async (id: string, payload: IUpdateDoctorPayload) => {
  const doctor = await prisma.doctor.update({
    where: {
      id,
    },
    data: payload,
  });
  return doctor;
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
  updateDoctor,
};
