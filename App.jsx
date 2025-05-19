import React, { useState } from "react";  
import "./App.css";  

function App() {  
  const [values, setValues] = useState({  
    firstname: '',  
    lastname: '',  
    email: '',  
    gender: '',  
    contact: '',  
    subject: 'math', // Set default value for subject  
    resume: '',  
    url: '',  
    about: '',  
    joiningDate: '',  
    isActive: false,  
  });  

  const [errors, setErrors] = useState({});  

  const handleChanges = (e) => {  
    const { name, type, value, checked } = e.target;  
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value });  
  };  

  const validate = () => {  
    const newErrors = {};  

    if (!values.firstname) newErrors.firstname = "First name is required.";  
    if (!values.lastname) newErrors.lastname = "Last name is required.";  
    if (!values.email) newErrors.email = "Email is required.";  
    else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = "Email is not valid.";  
    if (!values.contact) newErrors.contact = "Contact number is required.";  
    else if (!/^\d{10}$/.test(values.contact)) newErrors.contact = "Contact number must be exactly 10 digits.";  
    if (!values.joiningDate) newErrors.joiningDate = "Joining date is required.";  

    setErrors(newErrors);  
    return Object.keys(newErrors).length === 0;  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (validate()) {  
      console.log(values);  
      alert("Form submitted successfully!");  
    }  
  };  

  const ResetFun = () => {  
    setValues({  
      firstname: '',  
      lastname: '',  
      email: '',  
      contact: '',  
      gender: '', // Reset gender to default (no selection)  
      subject: 'math', // Reset to default value for subject  
      resume: '',  
      url: '',  
      about: '',  
      joiningDate: '',  
      isActive: false, // Reset checkbox  
    });  
    setErrors({});  
  };  

  return (  
    <div className="container">  
      <h1> EMPLOYEE FORM </h1>  
      <form onSubmit={handleSubmit}>  
        <label htmlFor="firstname">First Name</label>  
        <input type="text" placeholder="Enter First Name" name="firstname" onChange={handleChanges} value={values.firstname} required />  
        {errors.firstname && <span className="error">{errors.firstname}</span>}  

        <label htmlFor="lastname">Last Name</label>  
        <input type="text" placeholder="Enter Last Name" name="lastname" onChange={handleChanges} value={values.lastname} required />  
        {errors.lastname && <span className="error">{errors.lastname}</span>}  

        <label htmlFor="email">Email</label>  
        <input type="email" placeholder="Enter Email" name="email" onChange={handleChanges} value={values.email} required />  
        {errors.email && <span className="error">{errors.email}</span>}  

        <label htmlFor="contact">Contact</label>  
        <input type="text" placeholder="Enter Phone Number" name="contact" onChange={handleChanges} value={values.contact} />  
        {errors.contact && <span className="error">{errors.contact}</span>}  

        <label htmlFor="gender">Gender</label>  
        <div className="gender-group">  
          <input type="radio" name="gender" value="Male" onChange={handleChanges} checked={values.gender === "Male"} /> Male  
          <input type="radio" name="gender" value="Female" onChange={handleChanges} checked={values.gender === "Female"} /> Female  
          <input type="radio" name="gender" value="Others" onChange={handleChanges} checked={values.gender === "Others"} /> Others  
        </div>  

        <label htmlFor="joiningDate">Date of Joining</label>  
        <input type="date" name="joiningDate" onChange={handleChanges} value={values.joiningDate} />  
        {errors.joiningDate && <span className="error">{errors.joiningDate}</span>}  

        <label htmlFor="subject">Subject</label>  
        <select name="subject" id="subject" onChange={handleChanges} value={values.subject}>  
          <option value="math">MATH</option>  
          <option value="Physics">Physics</option>  
          <option value="English">ENGLISH</option>  
        </select>  

        <label htmlFor="resume">Resume</label>  
        <input type="file" name="resume" onChange={(e) => setValues({ ...values, resume: e.target.files[0]?.name || '' })} />  

        <label htmlFor="url">URL</label>  
        <input type="text" name="url" placeholder="Enter Image URL" onChange={handleChanges} value={values.url} />  

        <label htmlFor="about">About</label>  
        <textarea name="about" id="about" cols="30" rows="10" placeholder="Enter Description" onChange={handleChanges} value={values.about}></textarea>  

        <label htmlFor="status">Status</label>  
        <input  
          type="checkbox"  
          id="status"  
          name="isActive"  
          checked={values.isActive}   // Bind the state here  
          onChange={handleChanges}  // Trigger the checkbox change  
        />  
        <span>{values.isActive ? 'Active' : 'Inactive'}</span>  

        <div>  
          <button type="button" onClick={ResetFun}>Reset</button>  
          <button type="submit">Submit</button>  
        </div>  
      </form>  
    </div>  
  );  
}  

export default App;