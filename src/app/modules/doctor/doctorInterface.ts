import { UserGender } from "../../../generated/prisma/enums";

export interface IUpdateDoctorPayload {
  name?: string;
  profilePhoto?: string;
  contactNumber?: string;
  address?: string;
  experience?: number;
  gender?: UserGender;
  appointmentFee?: number;
  qualifications?: string[];
  currentWorkingPlace?: string;
  designation?: string;
}
