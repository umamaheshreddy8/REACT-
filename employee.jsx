import React, { useState } from 'react';
import './employee.css';

export default function Employee() {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    gender: '',
    dateOfMeeting: '',
    subject: '',
    url: '',
    about: '',
    isActive: false,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    const formCopy = {
      ...formData,
      resume: formData.resume ? formData.resume.name : null, // only send name of file
    };

    // Save to localStorage
    localStorage.setItem('employeeFormData', JSON.stringify(formCopy));

    // Open new tab
    window.open('/output', '_blank');
  };

  return (
    <div className="employee-form">
      <h1>Employee Form</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Contact:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Meeting:</label>
        <input type="date" name="dateOfMeeting" value={formData.dateOfMeeting} onChange={handleChange} required />

        <label>Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

        <label>URL:</label>
        <input type="url" name="url" value={formData.url} onChange={handleChange} required />

        <label>About:</label>
        <textarea name="about" value={formData.about} onChange={handleChange} required />

        <label>
          <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />
          Active
        </label>

        <label>Resume:</label>
        <input type="file" name="resume" onChange={handleChange} />

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
