import express, { Application, Request, Response } from "express";
import { IndexRoutes } from "./app/routes";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

//? root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World! nad welcome to PG Hospital API");
});

//? api routes
app.use("/api/v1", IndexRoutes);

export default app;
