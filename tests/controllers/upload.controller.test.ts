import assert from 'node:assert/strict';
import test from 'node:test';
import buildApp from './../../app.ts';

test('POST /upload-image', async (t) => {
  const app = buildApp();

  await t.test('returns 400 when no file is uploaded', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/upload-image',
    });

    assert.equal(response.statusCode, 400);
    const body = JSON.parse(response.body);
    assert.equal(body.error, 'No file uploaded');
  });

  await t.test('returns 200 with file metadata when valid image is provided', async () => {
    const form = new FormData();
    const fakeImageContent = 'fake-binary-image-data';
    const blob = new Blob([fakeImageContent], { type: 'image/png' });
    form.append('file', blob, 'sample.png');

    const response = await app.inject({
      method: 'POST',
      url: '/upload-image',
      // Pass the FormData directly as the payload
      body: form,
    });

    assert.equal(response.statusCode, 200);
    const body = JSON.parse(response.body);
    assert.equal(body.filename, 'sample.png');
    assert.equal(body.mimetype, 'image/png');
    assert.equal(body.sizeInBytes, fakeImageContent.length);
  });
});