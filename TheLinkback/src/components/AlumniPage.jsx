import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AlumniPage.css";

const AlumniPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    graduationYear: "",
    branch: "",
    currentJob: "",
    company: "",
    linkedin: "",
    github: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Alumni Registered:", formData);
    alert("Alumni Registered Successfully!");
    navigate("/homepage");
  };

  return (
    <div className="alumni-signup-container">
      <h2>Alumni Sign Up</h2>
      <form className="alumni-signup-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" required onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" required onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" required onChange={handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" required onChange={handleChange} />
        </label>
        <label>
          Graduation Year:
          <input type="number" name="graduationYear" required onChange={handleChange} />
        </label>
        <label>
          Branch:
          <input type="text" name="branch" required onChange={handleChange} />
        </label>
        <label>
          Current Job Role:
          <input type="text" name="currentJob" onChange={handleChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" onChange={handleChange} />
        </label>
        <label>
          LinkedIn Profile:
          <input type="url" name="linkedin" onChange={handleChange} />
        </label>
        <label>
          GitHub Profile:
          <input type="url" name="github" onChange={handleChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" rows="3" onChange={handleChange}></textarea>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AlumniPage;
