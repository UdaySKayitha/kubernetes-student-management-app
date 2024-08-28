import React, { useState } from 'react';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { name, email, phone, country };
    const response = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    if (response.ok) {
      setName('');
      setEmail('');
      setPhone('');
      setCountry('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;

