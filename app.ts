import Fastify from 'fastify';
import { uploadRoutes } from './routes/upload.routes.ts';
import multipart from '@fastify/multipart';

export default function buildApp() {
  const fastify = Fastify();

  fastify.register(multipart, {
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB
    },
  });
  fastify.register(uploadRoutes);

  return fastify;
}
