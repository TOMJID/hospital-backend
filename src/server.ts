import "dotenv/config";
import app from "./app";

const port = process.env.PORT;

const server = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

server();
