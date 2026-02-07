import { UserGender } from "../../../generated/prisma/browser";

export interface IDoctorPayload {
  password: string;
  doctor: {
    name: string;
    email: string;
    profilePhoto?: string;
    contactNumber?: string;
    address: string;
    registrationNumber: string;
    experience: number;
    gender: UserGender;
    appointmentFee: number;
    qualifications: string[];
    currentWorkingPlace: string;
    designation: string;
  };
  specialties: string[];
}
