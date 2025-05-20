import React, { useEffect, useState } from 'react';
import './output.css';

export default function Output() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('employeeFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="output-container">
      <h1>EMPLOYEE DETAILS</h1>
      <div className="details-card">
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Contact:</strong> {formData.contact}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Date of Meeting:</strong> {formData.dateOfMeeting}</p>
        <p><strong>Subject:</strong> {formData.subject}</p>
        <p><strong>URL:</strong> {formData.url}</p>
        <p><strong>About:</strong> {formData.about}</p>
        <p><strong>Status:</strong> {formData.isActive ? "Active" : "Inactive"}</p>
        {formData.resume && <p><strong>Resume:</strong> {formData.resume}</p>}
      </div>
    </div>
  );
}
