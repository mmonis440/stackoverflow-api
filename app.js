const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port=3000;
const app=express();
app.use(bodyparser.json());


app.get('/answer',(req,res)=>{
  axios.get('https://api.stackexchange.com/2.3/answers?page=5&pagesize=5&order=desc&sort=activity&site=stackoverflow').then(resp => res.send(resp.data)); 

})




app.listen(3000,()=>console.log(`server has started on port ${port}`))
