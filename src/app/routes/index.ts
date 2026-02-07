import { Router } from "express";
import { SpecialtyRoute } from "../modules/specialty/specialty.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";
import { DoctorRoute } from "../modules/doctor/doctor.route";

const router = Router();

//? every route is pussed by /api/v1
router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoute);
router.use("/users", UserRoute);
router.use("/doctors", DoctorRoute);

export const IndexRoutes = router;
