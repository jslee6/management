import React,{ Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : '1',
  // 'image': process.env.PUBLIC_URL + '/idis4.jpg',
  'image': 'https://picsum.photos/250',
  
  
  'name' : '이진석',
  'birthday' : '891208',
  'gender' : '남자',
  'job' : '대학생'
},

{
  'id' : '2',
  'image': 'https://picsum.photos/200/300',
  'name' : '나진석',
  'birthday' : '991208',
  'gender' : '남자',
  'job' : '중학생'
},

{
  'id' : '3',
  'image': process.env.PUBLIC_URL + '/idis4.jpg',
  'name' : '다진석',
  'birthday' : '791208',
  'gender' : '남자',
  'job' : '회사원'
},

]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.name}
              gender={c.gender}
              job={c.job}>
            </Customer>
          )
        })
      }
  
  </div>

  

  );
}

export default App;
