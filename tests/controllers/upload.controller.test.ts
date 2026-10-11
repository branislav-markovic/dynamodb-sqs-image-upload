import { test } from "node:test";
import assert from "node:assert/strict";
import buildApp from "./../../app.ts";

test("POST /upload-image returns 200 and success message", async () => {
  const app = buildApp();

  const response = await app.inject({
    method: "POST",
    url: "/upload-image",
  });

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { message: "Upload endpoint ready" });
});