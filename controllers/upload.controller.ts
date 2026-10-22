import { FastifyReply, FastifyRequest } from "fastify";
import { error } from "node:console";

export async function handleUploadImage(
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (!request.isMultipart()) {
    return reply.status(400).send({ error: 'No file uploaded' });
  }
  const file = await request.file();
  if (!file) {
    return reply.status(400).send({
      error: 'No file uploaded.'
    })
  }

  const buffer = await file.toBuffer()

  return reply.status(200).send({
    filename: file.filename,
    mimetype: file.mimetype,
    sizeInBytes: buffer.length,
  })
}
