const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port=3000;
const app=express();
app.use(bodyparser.json());

app.get('/',(req,res)=>{
  res.send("hello world");
})



app.listen(3000,()=>console.log(`server has started on port ${port}`))
