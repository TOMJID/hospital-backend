import { Router } from "express";
import { SpecialtyRoute } from "../modules/specialty/specialty.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";

const router = Router();

//? every route is pussed by /api/v1
router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoute);
router.use("/users", UserRoute);

export const IndexRoutes = router;
