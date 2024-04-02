import express from "express";
import { Server } from "http";
import cors from "cors";
import router from "./router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export function startServer(): Server {
  const PORT = 8080;
  const server = app.listen(PORT, () => {
    console.log(`🚀Server running and listening on http://localhost:${PORT}`);
  });
  process.on("SIGTERM", () => {
    server.close();
  });
  return server;
}

export default app;
