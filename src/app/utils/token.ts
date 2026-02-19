import { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "./jwt";
import { envVars } from "../config/env";

const getAccessToken = (payload: JwtPayload) => {
  const accessToken = jwtUtils.createToken(payload, envVars.JWT_ACCESS_SECRET, {
    expiresIn: envVars.JWT_ACCESS_EXPIRES_IN,
  } as SignOptions);
  return accessToken;
};

const getRefreshToken = (payload: JwtPayload) => {
  const refreshToken = jwtUtils.createToken(
    payload,
    envVars.JWT_REFRESH_SECRET,
    { expiresIn: envVars.JWT_REFRESH_EXPIRES_IN } as SignOptions,
  );
  return refreshToken;
};

export const tokenUtils = {
  getAccessToken,
  getRefreshToken,
};
