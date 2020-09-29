import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';

function App() {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [receivedData, setRecivedData] = useState([]);

  useEffect(() =>{
    const fetchPost = async () => {
      try{
          setLoading(true);
          const postData = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setRecivedData(() => {return postData.data});
          setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  },[]);


  console.log(receivedData);

  return (
   <Posts posts={receivedData} loading={loading}/>
  );
}

export default App;
