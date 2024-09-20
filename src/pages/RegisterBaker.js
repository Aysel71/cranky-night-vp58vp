import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationPage.css"; // Adjust path to CSS file

const RegisterBaker = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/upload-baker-photo"); // Navigate to the photo upload page
  };

  return (
    <div className="registration-page">
      <header className="header">
        <div className="logo">NIKO</div>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="profile-icon">&#x1F464;</div>
      </header>

      <h1 className="title">BAKER REGISTRATION</h1>

      <div className="role-buttons">
        <button className="role-button">I'm a Client</button>
        <button className="role-button active">I'm a Baker</button>
      </div>

      <div className="registration-form">
        <form onSubmit={handleNext}>
          <input type="text" placeholder="First Name" className="form-input" />
          <input type="text" placeholder="Last Name" className="form-input" />
          <input
            type="text"
            placeholder="Phone Number"
            className="form-input"
          />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="date" className="form-input" />
          <button type="submit" className="submit-button">
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterBaker;
