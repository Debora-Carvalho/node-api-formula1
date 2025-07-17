import fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes/routes";

export const server = fastify({ logger: true });

server.register(cors, { origin: "*" });

registerRoutes(server);
