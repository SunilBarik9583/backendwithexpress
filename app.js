const express = require('express');
const mysql = require('mysql2');
const app = express();

const port = 3000;


// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sunil@9439@#',
  database: 'student'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send([{'greeting':'Hello World!'}, {'greeting':'Hello World!'}])
})

app.get('/name',(req,res)=>{
  res.send("hi there")
})
app.post('/post',(req,res)=>{
  const name =req.body.name;
  const age =req.body.age;
  const id=req.body.id;

  connection .query('insert into students values(?,?,?)',[name,age,id],(err,result)=>{
    if (err) {
      console.error('Error connecting to MySQL: ', err);
      return;
  }
  console.log('POsted');
});
  })

app.listen(port, () => {
  console.log(`Example app hii listening on port ${port} working let's get start.`)
}) 