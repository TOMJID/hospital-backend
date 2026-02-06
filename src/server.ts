import "dotenv/config";
import app from "./app";
import { prisma } from "./app/lib/prisma";

const port = process.env.PORT;

const server = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

server();
