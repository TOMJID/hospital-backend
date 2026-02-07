import { auth } from "../../lib/auth";

interface IRegisterPatient {
  name: string;
  email: string;
  password: string;
}

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
  // const patient = await prisma.$transaction(async (timeline) => {});

  return data;
};

export const AuthService = {
  registerPatient,
};
