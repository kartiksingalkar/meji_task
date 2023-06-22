import React, { useEffect, useState } from "react";

function UserCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users"); 

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    height: '200px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div>
      <div>
      <h1>Meji Coding Skills Play</h1>
      <h2>User Card List</h2>
      </div>
      <div className='card'>
        <div className='carddata' style={containerStyle}>
      <ul>
        {data.map((item) => (
          <ul key={item.id}>{item.name}</ul>
          ))}
      </ul>
          </div>
      <ul>
        {data.map((item) => (
          <ul key={item.id}>{item.website}</ul>
          ))}
      </ul>
      <ul>
        {data.map((item) => (
          <ul key={item.id}>{item.email}</ul>
          ))}
      </ul>
      <ul>
        {data.map((item) => (
          <ul key={item.id}>{item.phone}</ul>
          ))}
      </ul>
      <ul>
        {data.map((item) => (
          <ul key={item.id}>{item.company.name}</ul>
          ))}
      </ul>

          </div>
    </div>
  );
}

export default UserCard;
