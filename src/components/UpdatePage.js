import React, { useState } from "react";
import { Link } from "react-router-dom";
import './UpdatePage.css'
function UpdatePage(props) {
  // Set initial form state

  const {updateData, updateSummary, handleClick, styles} = props;
  const [formData, setFormData] = useState({
    medicationStatus: "",
    bloodGlucoseLevel: "",
    physicalActivityLevel: "",
    diet: "",
    weight: "",
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Do whatever you want with the form data
    updateData(formData);
    updateSummary({risk: "High", recommendation: "Highly reduce sweet consumption, Exercise more often"})
    handleClick();
  };

  return (
    <div className="update-container" style={styles}> 
      <h2>Update Your Health Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="medicationStatus">Medication Status:</label>
        <input
          type="text"
          id="medicationStatus"
          name="medicationStatus"
          value={formData.medicationStatus}
          onChange={handleInputChange}
        />

        <label htmlFor="bloodGlucoseLevel">Blood Glucose Level:</label>
        <input
          type="text"
          id="bloodGlucoseLevel"
          name="bloodGlucoseLevel"
          value={formData.bloodGlucoseLevel}
          onChange={handleInputChange}
        />

        <label htmlFor="physicalActivityLevel">Physical Activity Level:</label>
        <input
          type="text"
          id="physicalActivityLevel"
          name="physicalActivityLevel"
          value={formData.physicalActivityLevel}
          onChange={handleInputChange}
        />

        <label htmlFor="diet">Diet:</label>
        <input
          type="text"
          id="diet"
          name="diet"
          value={formData.diet}
          onChange={handleInputChange}
        />

        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdatePage;
