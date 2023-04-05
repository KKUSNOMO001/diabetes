import React, { useState } from "react";
import { Link } from "react-router-dom";
import './DataPage.css'
import './UpdatePage.css'
import UpdatePage from "./UpdatePage";

const styles = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  margin: 'auto',
  marginTop: '50px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
};

function DataPage(props) {
    // Set initial data state (this is just an example)

    const [isUpdating, setIsUpdating] = useState(false);

    const {data, updateData, summary, updateSummary} = props;

    const handleClick = () => {
        setIsUpdating(!isUpdating)
    }
    if(!isUpdating){
        return (
            <div>
                <div className="update-container" style={styles}>
                    <div>
                        <h2>Your Current Health Information</h2>

                        <p><b>Medication Status:</b> {data.medicationStatus}</p>
                        <p><b>Blood Glucose Level:</b> {data.bloodGlucoseLevel} mg/dL</p>
                        <p><b>Physical Activity Level:</b> {data.physicalActivityLevel}</p>
                        <p><b>Diet:</b> {data.diet}</p>
                        <p><b>Weight:</b> {data.weight} kg</p>

                        <button type="submit" onClick={handleClick}>Update</button>
                    </div>
                </div>
                <div className="update-container" style={styles}>
                    <RiskRecommendation riskLevel={summary.risk} recommendation={summary.recommendation}/>
                </div>
                
            </div>
        );
    }
    
    else{
        return <UpdatePage updateData = {updateData} updateSummary = {updateSummary} handleClick={handleClick} styles={styles}/>
    }
  }
  

function RiskRecommendation(props) {
    return (
      <div>
        <h2>Health Summary</h2>
        <p><b>Risk Level:</b> {props.riskLevel}</p>
        <p><b>Recommendation:</b> {props.recommendation}</p>
      </div>
    );
  }

export default DataPage;
