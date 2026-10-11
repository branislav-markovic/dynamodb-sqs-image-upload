import { handleUploadImage } from '../controllers/upload.controller.ts'
import { FastifyInstance } from 'fastify';

export async function uploadRoutes(fastify: FastifyInstance) {
    fastify.post('/upload-image', handleUploadImage)
}