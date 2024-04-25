import React,{ Component} from 'react';
import './App.css';
import Paper from '@mui/material/Paper'
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// import { withStyles } from '@mui/material';



const styles = {
  root: {
  width: "100%",
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  };
 
const customers = [{
  'id' : '1',
  'image': process.env.PUBLIC_URL + '/idis7.jpg',
  // 'image': 'https://picsum.photos/250',
  'name' : '이진석',
  'birthday' : '691208',
  'gender' : '남자',
  'job' : '대학생'
},

{
  'id' : '2',
  'image': process.env.PUBLIC_URL + '/idis8.jpg',
  'name' : '나진석',
  'birthday' : '991208',
  'gender' : '남자',
  'job' : '중학생'
},

{
  'id' : '3',
  'image': process.env.PUBLIC_URL + '/idis6.jpg',
  'name' : '다진석',
  'birthday' : '791208',
  'gender' : '남자',
  'job' : '회사원'
},

]


function App() {
  
  return (
    <Paper>
      <Table >
        <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
            
        </TableHead>
      <TableBody>
      {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}>
            </Customer>
          )
        })
      }
      </TableBody>
      </Table>
  </Paper>

  );
}

export default App;
// export default withStyles(styles)(App);
