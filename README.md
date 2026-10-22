# Dynamo SQS Image Upload Service

A high-performance image upload and processing pipeline built with Fastify, TypeScript, and AWS SDK v3. It handles multipart file uploads, stores assets in AWS S3, writes metadata to DynamoDB, and dispatches processing tasks onto an SQS queue.

---

## 🛠 Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/) (v22+ LTS)
- **Framework:** [Fastify](https://fastify.dev/) with `@fastify/multipart`
- **Language:** [TypeScript](https://www.typescriptlang.org/) (configured with `NodeNext` modules and `tsx` execution engine)
- **Cloud SDK:** [AWS SDK v3](https://aws.amazon.com/sdk-for-javascript/) (`@aws-sdk/client-s3`, `@aws-sdk/client-sqs`, `@aws-sdk/lib-dynamodb`)
- **Linter & Formatter:** [Biome](https://biomejs.dev/) (strict semicolons, single quotes)
- **Containerization:** [Docker](https://www.docker.com/) & Docker Compose with BuildKit support
- **Testing:** Node.js native test runner (`node:test`) powered by `tsx` and `aws-sdk-client-mock`
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) for automated linting, typechecking, and testing

---

## 📁 Project Structure

```text
dynamo-sqs-image-upload/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow
├── src/
│   ├── config/                  # AWS & runtime configuration
│   │   ├── aws.ts
│   │   └── s3.ts
│   ├── controllers/             # Request handlers
│   │   └── upload.controller.ts
│   ├── routes/                  # Fastify route definitions
│   │   └── upload.routes.ts
│   ├── services/                # Business logic & AWS integrations
│   │   └── s3.service.ts
│   ├── app.ts                   # Fastify app builder & plugin registration
│   └── index.ts                 # Application entry point & server listener
├── tests/
│   ├── controllers/
│   │   └── upload.controller.test.ts
│   └── services/
│       └── s3.service.test.ts
├── .dockerignore
├── .env.example
├── biome.json                   # Biome linter & formatter configuration
├── docker-compose.yml           # Local development container orchestration
├── Dockerfile                   # Multi-stage / standard container definition
├── package.json
└── tsconfig.json                # TypeScript compiler configuration