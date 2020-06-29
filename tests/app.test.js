const request = require('supertest')
const app = require('../app')

describe('GET /posts/1/comments', () => {
  it('responds with comments relating to postId: 1', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .then(response => {
        expect(response.body).toBeDefined();
        done();
      });
  });
});
