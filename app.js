const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3000;
const app = express();
app.use(bodyparser.json());

app.get('/',(req,res)=>{
   res.send("hello team wave and this is about my stackoverflow api REST API using nodejs")
   res.end()
   console.log('you are on the main page')
});

app.get('/answer', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/answers?page=5&pagesize=5&order=desc&sort=activity&site=stackoverflow')
    .then(resp => res.send(resp.data));
    console.log('you are on answer page')
});

app.get('/articles', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/answers?page=5&pagesize=5&order=desc&sort=activity&site=stackoverflow')
    .then(resp => res.send(resp.data));
    console.log('you are on the articles page')
});
app.get('/badges', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/badges?order=desc&sort=rank&site=stackoverflow')
    .then(resp => res.send(resp.data));
    console.log('you are on the bages page')
});

app.get('/collectives', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/collectives?order=desc&sort=name&site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on collectives page')
});
app.get('/comments', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/comments?order=desc&sort=creation&site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on comments page')
});
app.get('/infosite', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/info?site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on infosite page')
});

app.get('/posts', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/posts?order=desc&sort=activity&site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on posts page')
});

app.get('/questions', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on questions page')
});

app.get('/privileges', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/privileges?site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on privileges page')
});

app.get('/tags', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on tags page')
});

app.get('/userall', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow')
    .then(resp => res.send(resp.data))
    console.log('you are on userall page')
});

app.get('/error', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/errors')
    .then(resp => res.send(resp.data))
    console.log('you are on errors page')
});
app.get('/sites/allinfo', (req, res) => {
  axios.get('https://api.stackexchange.com/2.3/sites')
    .then(resp => res.send(resp.data))
    console.log(`you are on sites/allinfo page`)
});







app.listen(3000, () => console.log(`server has started on port ${port}`))
