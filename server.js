const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req,res) => {
    res.send({message: 'Hello Express!'});
});
// 초기 헬로 보여주는 소스코드 예제

app.get('/api/customers',(req,res)=> {
    res.send([
        {
        'id' : '1',
        // 'image': process.env.PUBLIC_URL + '/idis7.jpg',
        'image': 'https://picsum.photos/250',
        'name' : '이진석',
        'birthday' : '691208',
        'gender' : '남자',
        'job' : '대학생'
      },
      
      {
        'id' : '2',
        'image': 'https://picsum.photos/249',
        'name' : '나진석',
        'birthday' : '991208',
        'gender' : '남자',
        'job' : '중학생'
      },
      
      {
        'id' : '3',
        'image': 'https://picsum.photos/248',
        // 'image': process.env.PUBLIC_URL + '/idis6.jpg',
        'name' : '다진석',
        'birthday' : '791208',
        'gender' : '남자',
        'job' : '회사원'
      },
    ] );
});
 
app.listen(port, () => console.log(`Listening on port ${port}`));