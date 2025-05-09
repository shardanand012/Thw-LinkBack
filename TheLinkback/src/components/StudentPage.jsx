import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for redirect
import "./StudentPage.css"; // Your custom styles

const StudentPage = () => {
  const navigate = useNavigate(); // Hook to navigate after registration

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    branch: "",
    year: "",
    rollNumber: "",
    interests: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Placeholder: You can connect to backend API here
    console.log("Registered Student:", formData);
    alert("Registration successful!");
    
    // Redirect to homepage
    navigate("/homepage");
  };

  return (
    <div className="student-signup-container">
      <h2>Student Sign Up</h2>
      <form className="student-signup-form" onSubmit={handleSubmit}>
        {/* Account Info */}
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

        {/* Academic Info */}
        <label>
          College Name:
          <input type="text" name="college" required onChange={handleChange} />
        </label>
        <label>
          Branch:
          <input type="text" name="branch" required onChange={handleChange} />
        </label>
        <label>
          Year of Study:
          <input type="number" name="year" min="1" max="5" required onChange={handleChange} />
        </label>
        <label>
          Roll Number:
          <input type="text" name="rollNumber" required onChange={handleChange} />
        </label>

        {/* Optional Info */}
        <label>
          Areas of Interest:
          <input type="text" name="interests" onChange={handleChange} />
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

export default StudentPage;
