import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    username: '',
    industry: '',
    address: '',
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const { name, company, email, username, industry, address } = response.data;
        setFormData({ name, company, email, username, industry, address });
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/users', formData)
      .then(response => {
        console.log('Form data updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating form data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Company:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Industry:
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Update</button>
    </form>
  );
};

export default Form;
