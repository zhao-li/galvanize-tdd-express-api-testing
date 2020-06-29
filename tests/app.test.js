const request = require('supertest')

let app;
let server;

beforeAll(() => {
  app = require('../app');
  server = app.listen(3000);
});
afterAll(done => {
  server.close();
  done();
});

describe('GET /posts/1/comments', () => {
  it('responds with comments relating to postId: 1', (done) => {
    request(app)
      .get('/posts/1/comments')
      .expect(200)
      .then(response => {
        const firstComment = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstComment]['postId']).toBe(1);
        done();
      });
  });
});
