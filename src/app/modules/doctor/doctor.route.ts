import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

router.get("/all-doctors", DoctorController.getAllDoctors);
router.get("/:id", DoctorController.getDoctorById);
router.patch("/update/:id", DoctorController.updateDoctor);
router.delete("/soft-delete/:id", DoctorController.softDeleteDoctor);

export const DoctorRoute = router;
