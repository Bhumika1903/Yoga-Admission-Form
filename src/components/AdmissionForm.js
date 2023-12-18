// src/components/AdmissionForm.js
import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 18, // Default age to 18
    selectedBatch: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('User registered successfully!', responseData);
        // Optionally, you can reset the form after successful submission
        setFormData({
          name: '',
          age: 18, // Reset age to 18 after submission
          selectedBatch: '',
        });
        alert(`Registration and payment successful!\nTransaction ID: ${responseData.transactionId}`);
      } else {
        console.error('Registration and payment failed.');
      }
    } catch (error) {
      console.error('Error during registration and payment:', error);
    }
  };

  return (
    <div className="admission-form">
      <h2>Yoga Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange} required
        />

        <label htmlFor="age">Age:</label>
        <select
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange} required
        >
          {Array.from({ length: 48 }, (_, index) => (
            <option key={index} value={18 + index}>{18 + index}</option>
          ))}
        </select>

        <label htmlFor="selectedBatch">Choose Batch:</label>
        <select
          id="selectedBatch"
          name="selectedBatch"
          value={formData.selectedBatch}
          onChange={handleInputChange} required
        >
          <option value="">Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
