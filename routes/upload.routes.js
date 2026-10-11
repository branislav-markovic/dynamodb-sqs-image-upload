import { handleUploadImage } from '../controllers/upload.controller.js'

export async function uploadRoutes(fastify, options) {
    fastify.post('/upload-image', handleUploadImage)
}