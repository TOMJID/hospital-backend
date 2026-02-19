import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import validateRequestInput from "../../middlewares/validateRequestInput";
import { updateDoctorZodSchema } from "./doctor.validation";

const router = Router();

router.get("/all-doctors", DoctorController.getAllDoctors);
router.get("/:id", DoctorController.getDoctorById);
router.patch(
  "/update/:id",
  validateRequestInput(updateDoctorZodSchema),
  DoctorController.updateDoctor,
);
router.delete("/soft-delete/:id", DoctorController.softDeleteDoctor);

export const DoctorRoute = router;
