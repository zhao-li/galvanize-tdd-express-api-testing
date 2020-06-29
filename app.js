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

module.exports = app
