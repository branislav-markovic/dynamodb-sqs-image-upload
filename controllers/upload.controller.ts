import { FastifyRequest, FastifyReply } from 'fastify';

export async function handleUploadImage(request: FastifyRequest, reply: FastifyReply) {
    return {
        message: 'Upload endpoint ready'
    }
}