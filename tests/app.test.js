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
describe('POST /posts/1/comments', () => {
  it('responds with success and posted comment', (done) => {
    const commentBody = 'hello, comment';
    request(app)
      .post('/posts/1/comments')
      .send({body: commentBody})
      .expect(201)
      .then(response => {
        expect(response.body['body']).toEqual(commentBody);
        done();
      });
  });
});

describe('GET /albums/1/photos', () => {
  it('responds with albums relating to albumId: 1', (done) => {
    request(app)
      .get('/albums/1/photos')
      .expect(200)
      .then(response => {
        const firstPhoto = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstPhoto]['albumId']).toBe(1);
        done();
      });
  });
});
describe('POST /albums/1/photos', () => {
  it('responds with success and posted photos', (done) => {
    const photoUrl = 'https://photo.url';
    request(app)
      .post('/albums/1/photos')
      .send({url: photoUrl})
      .expect(201)
      .then(response => {
        expect(response.body['url']).toEqual(photoUrl);
        done();
      });
  });
});

