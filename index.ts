import buildApp from './app.ts';

const app = buildApp();

const address = await app.listen({
  port: Number(process.env.PORT) || 3981,
  host: '0.0.0.0',
});

console.log(`Server listening on ${address}`);
