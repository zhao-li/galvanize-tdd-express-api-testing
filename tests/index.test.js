const request = require('supertest')
//const app = require('../index')

const hostUrl = 'https://jsonplaceholder.typicode.com/';

describe('GET /posts/1/comments', () => {
  it('responds with a 200', (done) => {
    request(hostUrl)
      .get('posts/1/comments')
      .expect(200)
      .then(response => {
        expect(response.body).toBeDefined();
        done();
      });
  });
});
