import type { FastifyInstance } from 'fastify';
import { handleUploadImage } from '../controllers/upload.controller.ts';

export async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post('/upload-image', handleUploadImage);
}
