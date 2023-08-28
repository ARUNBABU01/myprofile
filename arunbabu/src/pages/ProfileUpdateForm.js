import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PersonalInfo from '../components/update_components/PersonalInfo';
import { Styles } from '../Styles';
import ContactInfo from '../components/update_components/ContactInfo';

const ProfileUpdateForm = () => {
  const classes = Styles();
  const [formData, setFormData] = useState({});

  const handlePersonalInfoChange = (updatedData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  const handleSubmit = () => {
    // Perform data submission here
    console.log('Submitted data:', formData);
  };

  return (
    <div className={classes.content}>
      <div className={classes.profileUpdateForm}>
        <div className="personal-info-section">
          <h2>Personal Information</h2>
          <PersonalInfo data={formData} onDataChange={handlePersonalInfoChange} />
        </div>
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <ContactInfo data={formData} onDataChange={handlePersonalInfoChange} />
        </div>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ProfileUpdateForm;
