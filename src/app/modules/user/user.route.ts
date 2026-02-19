import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequestInput from "../../middlewares/validateRequestInput";
import { createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/create-doctor",
  validateRequestInput(createDoctorZodSchema),
  UserController.createDoctor,
);

// router.post("/create-admin", UserController.createDoctor);
// router.post("/create-super_admin", UserController.createDoctor);

export const UserRoute = router;
