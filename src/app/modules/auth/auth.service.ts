import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface IRegisterPatient {
  name: string;
  email: string;
  password: string;
}
interface ILoginUser {
  name: string;
  email: string;
  password: string;
}

//? register patient
const registerPatient = async (payload: IRegisterPatient) => {
  const { name, email, password } = payload;

  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      //? default values are getting from auth.ts
    },
  });

  if (!data.user) {
    throw new Error("Failed to register patient");
  }

  // TODO: Create patient in transaction after sign up in User model
  const patient = await prisma.$transaction(async (timeline) => {
    return await timeline.patient.create({
      data: {
        userId: data.user.id,
        name: payload.name,
        email: payload.email,
      },
    });
  });

  return {
    ...data,
    patient,
  };
};

//? login user
const loginUser = async (payload: ILoginUser) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if (data.user.status === UserStatus.BLOCKED) {
    throw new Error("User is blocked");
  }

  if (data.user.isDeleted || data.user.status === UserStatus.DELETED) {
    throw new Error("User is deleted");
  }

  return data;
};

export const AuthService = {
  registerPatient,
  loginUser,
};
