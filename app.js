import Fastify from "fastify";
import { uploadRoutes } from "./routes/upload.routes.js";

export default function buildApp() {
    const fastify = Fastify();

    fastify.register(uploadRoutes);

    return fastify;
}