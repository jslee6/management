const fs = require('fs'); // 서버로 부터 DB 끌고오는 라이브러리
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const date = fs.readFileSync('./database.json');
const conf = JSON.parse(date);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers', (req,res) => {
      connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
        }  
      );
  });

// 초기 헬로 보여주는 소스코드 예제

// app.get('/api/customers',(req,res)=> {
//     res.send([
//         {
//         'id' : '1',
//         // 'image': process.env.PUBLIC_URL + '/idis7.jpg',
//         'image': 'https://picsum.photos/110',
//         'name' : '이진석',
//         'birthday' : '591208',
//         'gender' : '남자',
//         'job' : '대학생'
//       },
      
//       {
//         'id' : '2',
//         'image': 'https://picsum.photos/100',
//         'name' : '나진석',
//         'birthday' : '991208',
//         'gender' : '남자',
//         'job' : '중학생'
//       },
      
//       {
//         'id' : '3',
//         'image': 'https://picsum.photos/101',
//         // 'image': process.env.PUBLIC_URL + '/idis6.jpg',
//         'name' : '다진석',
//         'birthday' : '791208',
//         'gender' : '남자',
//         'job' : '회사원'
//       },
//     ] );
// });
 
app.listen(port, () => console.log(`Listening on port ${port}`));