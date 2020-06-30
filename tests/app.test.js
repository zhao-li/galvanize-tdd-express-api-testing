const request = require('supertest')

const index = require("../app");
let app;
let server;

beforeAll(() => {
  app = index.app;
});
afterAll(() => {
  const server  = index.server;
  server.close();
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
    const validComment = {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": commentBody
    };
    request(app)
      .post('/posts/1/comments')
      .send(validComment)
      .expect(201)
      .then(response => {
        expect(response.body['body']).toEqual(commentBody);
        done();
      });
  });
});

describe('GET /albums/1/photos', () => {
  it('responds with photos relating to albumId: 1', (done) => {
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
    const validPhoto = {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": photoUrl,
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
    request(app)
      .post('/albums/1/photos')
      .send(validPhoto)
      .expect(201)
      .then(response => {
        expect(response.body['url']).toEqual(photoUrl);
        done();
      });
  });
});

describe('GET /users/1/albums', () => {
  it('responds with albums relating to userId: 1', (done) => {
    request(app)
      .get('/users/1/albums')
      .expect(200)
      .then(response => {
        const firstAlbum = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstAlbum]['userId']).toBe(1);
        done();
      });
  });
});
describe('POST /users/1/albums', () => {
  it('responds with success and posted photos', (done) => {
    const albumTitle = 'hello, album';
    const validAlbum = {
      "userId": 1,
      "id": 1,
      "title": albumTitle
    }
    request(app)
      .post('/users/1/albums')
      .send(validAlbum)
      .expect(201)
      .then(response => {
        expect(response.body['title']).toEqual(albumTitle);
        done();
      });
  });
});

describe('GET /users/1/todos', () => {
  it('responds with todos relating to userId: 1', (done) => {
    request(app)
      .get('/users/1/todos')
      .expect(200)
      .then(response => {
        const firstTodo = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstTodo]['userId']).toBe(1);
        done();
      });
  });
});
describe('POST/users/1/todos', () => {
  it('responds with success and posted todo', (done) => {
    const todoTitle = 'hello, todo';
    const validTodo = {
      "userId": 1,
      "id": 1,
      "title": todoTitle,
      "completed": false
    }
    request(app)
      .post('/users/1/todos')
      .send(validTodo)
      .expect(201)
      .then(response => {
        expect(response.body['title']).toEqual(todoTitle);
        done();
      });
  });
});

describe('GET /users/1/posts', () => {
  it('responds with posts relating to userId: 1', (done) => {
    request(app)
      .get('/users/1/todos')
      .expect(200)
      .then(response => {
        const firstTodo = 0;
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(response.body[firstTodo]['userId']).toBe(1);
        done();
      });
  });
});
describe('POST/users/1/posts', () => {
  it('responds with success and posted todo', (done) => {
    const postTitle = 'hello, post';
    const validPost = {
      "userId": 1,
      "id": 1,
      "title": postTitle,
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    request(app)
      .post('/users/1/posts')
      .send(validPost)
      .expect(201)
      .then(response => {
        expect(response.body['title']).toEqual(postTitle);
        done();
      });
  });
});

