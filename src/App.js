import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PaginationPostComponent from './components/PaginationPostComponent';

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [resource, setResource] = useState([]);

  useEffect(() =>{
    const fetchPost = async () => {
        setIsError(false);
        setIsLoading(true);
      try{
          const postData = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setResource(() => {return postData.data});
      } catch (error) {
          setIsError(true);
      }
        setIsLoading(false);
    }
    fetchPost();
  },[]);

  return (
      <div>
            {isError && <div>Something went wrong ...</div>}
            <PaginationPostComponent someData={resource} isLoading={isLoading} />
      </div>
  );
}

export default App;
