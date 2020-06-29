const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello from express");
});

post1_comments = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
]
app.get('/posts/:id/comments', (req, res) => {
  res.json(post1_comments);
});
app.post('/posts/:id/comments', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

album1_photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
]
app.get('/albums/:id/photos', (req, res) => {
  res.json(album1_photos);
});
app.post('/albums/:id/photos', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

user1_albums = [
  {
    "userId": 1,
    "id": 9,
    "title": "saepe unde necessitatibus rem"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "distinctio laborum qui"
  }
]
app.get('/users/:id/albums', (req, res) => {
  res.json(user1_albums);
});
app.post('/users/:id/albums', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

user1_todos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }
]
app.get('/users/:id/todos', (req, res) => {
  res.json(user1_todos);
});
app.post('/users/:id/todos', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

user1_posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
app.get('/users/:id/posts', (req, res) => {
  res.json(user1_posts);
});
app.post('/users/:id/posts', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

module.exports = app
