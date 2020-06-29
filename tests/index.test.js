const request = require('supertest')
//const app = require('../index')

const hostUrl = 'https://jsonplaceholder.typicode.com/';

describe('GET /posts/1/comments', () => {
  it('responds with comments relating to postId: 1', (done) => {
    request(hostUrl)
      .get('posts/1/comments')
      .expect(200)
      .then(response => {
        const firstComment = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstComment]['postId']).toBe(1);
        done();
      });
  });
});

describe('GET /albums/1/photos', () => {
  it('responds with photos relating to albumId: 1', (done) => {
    request(hostUrl)
      .get('albums/1/photos')
      .expect(200)
      .then(response => {
        const firstPhoto = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstPhoto]['albumId']).toBe(1);
        done();
      });
  });
});

describe('GET /users/1/albums', () => {
  it('responds with albums relating to userId: 1', (done) => {
    request(hostUrl)
      .get('users/1/albums')
      .expect(200)
      .then(response => {
        const firstAlbum = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstAlbum]['userId']).toBe(1);
        done();
      });
  });
});

describe('GET /users/1/todos', () => {
  it('responds with todos relating to userId: 1', (done) => {
    request(hostUrl)
      .get('users/1/todos')
      .expect(200)
      .then(response => {
        const firstTodo = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstTodo]['userId']).toBe(1);
        done();
      });
  });
});

describe('GET /users/1/posts', () => {
  it('responds with posts relating to userId: 1', (done) => {
    request(hostUrl)
      .get('users/1/posts')
      .expect(200)
      .then(response => {
        const firstPost = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstPost]['userId']).toBe(1);
        done();
      });
  });
});
