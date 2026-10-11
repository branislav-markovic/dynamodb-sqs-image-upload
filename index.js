import buildApp from "./app.js";

const app = buildApp();

const address = await app.listen({
  port: process.env.SERVER_PORT,
  host: '0.0.0.0',
})

console.log(`Server listening on ${address}`);