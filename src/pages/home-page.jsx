import React from 'react';
import useFetch from '../hooks/useFetch';

function Home() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/people');

    if (loading) return (<p>loading...</p>);
    if (error) return (<p>error...</p>)


  return (
    <div>
      <p>Homepage</p>
      <div>
      {data.data.map(item => {
        const { id, attributes } = item;
        const { Name, Role } = attributes;

        return (
          <div key={id}>
            <h2>Name: {Name}</h2>
            <p>Role: {Role}</p>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Home;