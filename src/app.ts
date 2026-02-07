import express, { Application, Request, Response } from "express";
import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

//? root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to PG Hospital API");
});

//? api routes
app.use("/api/v1", IndexRoutes);

//? global error handler
app.use(globalErrorHandler);
//? not found handler
app.use(notFound);

export default app;
