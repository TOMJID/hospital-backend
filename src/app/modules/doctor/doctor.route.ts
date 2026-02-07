import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

router.get("/all-doctors", DoctorController.getAllDoctors);
router.get("/:id", DoctorController.getDoctorById);
// router.post("/create-super_admin", UserController.createDoctor);

export const DoctorRoute = router;
