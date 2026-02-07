import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

router.get("/all-doctors", DoctorController.getAllDoctors);
router.get("/:id", DoctorController.getDoctorById);
router.patch("/update/:id", DoctorController.updateDoctor);

export const DoctorRoute = router;
