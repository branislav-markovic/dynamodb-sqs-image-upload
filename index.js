import Fastify from "fastify";

const fastify = Fastify();

fastify.post('/upload-image', async (request, reply) => {
  return { message: "Upload endpoint ready" }
})

const address = await fastify.listen({
  port: process.env.SERVER_PORT,
  host: '0.0.0.0',
})

console.log(`Server listening on ${address}`);