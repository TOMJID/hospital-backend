import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

//? Specialty Routes

//* Create Specialty */
router.post("/", SpecialtyController.createSpecialty);

//* get all Specialty */
router.get("/", SpecialtyController.getAllSpecialty);

//* get single Specialty */
router.get("/:id", SpecialtyController.getSpecialtyById);

//* update Specialty */
router.patch("/:id", SpecialtyController.updateSpecialty);

//* delete Specialty */
router.delete("/:id", SpecialtyController.deleteSpecialty);

export const SpecialtyRoute = router;
