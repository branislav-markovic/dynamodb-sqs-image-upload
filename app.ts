import Fastify from 'fastify';
import { uploadRoutes } from './routes/upload.routes.ts';

export default function buildApp() {
  const fastify = Fastify();

  fastify.register(uploadRoutes);

  return fastify;
}
