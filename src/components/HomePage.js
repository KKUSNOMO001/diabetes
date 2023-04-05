import React from 'react';
import campusMap from './campus.png'
const styles = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  width: '70%',
  margin: 'auto',
  marginTop: '50px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
};

function HomePage(props) {
  return (
    <>
      <div style={styles}> 
        <h1>Welcome Back, {props.username}</h1>
        <p>Through our research, we have found that young adults aged 18-25 who have been diagnosed with type 2 diabetes are not receiving the necessary support to manage their condition. Our objective is to develop a comprehensive support system that will assist those struggling to manage their diabetes due to limited resources. </p>

        <p>Type 2 diabetes is a chronic illness that poses a significant threat to life and has long-term health implications. Unfortunately, there is currently no cure for this disease. Furthermore, the rising incidence of overweight and obesity among young adults has increased the risk of insulin resistance and contributed to the growing number of individuals with type 2 diabetes. Without adequate support and resources, these individuals may struggle to manage their condition, leading to financial burdens and further psychological and physical comorbidities.</p>

        <p>Our intended user segment consists of young adults aged 18-25 from all socioeconomic backgrounds who have been diagnosed with type 2 diabetes, including university students, recent graduates, and young professionals. This age group is undergoing a critical period of transition from adolescence to adulthood, and they may encounter various challenges, such as selecting a career path, achieving financial independence, and forming healthy habits. Our approach focuses on promoting lifestyle changes that will result in better long-term health outcomes.</p>
      </div>
      <div style={styles}>
        <h1>Find us Here!</h1>
        <div style={{display: 'flex'}}>
          <img src={campusMap} style={{width:"50%"}} alt='NTU Campus Map'/>
            <div style={{paddingLeft: "5%", paddingTop: "20px"}}>
              <ul style={{listStyle:"circle", display:"inline"}}>
                <li style={{fontSize:'4vh', margin: '2vh'}}>Location 1</li>
                <li style={{fontSize:'4vh', margin: '2vh'}}>Location 2</li>
                <li style={{fontSize:'4vh', margin: '2vh'}}>Location 3</li>
                <li style={{fontSize:'4vh', margin: '2vh'}}>Location 4</li>
                <li style={{fontSize:'4vh', margin: '2vh'}}>Location 5</li>
                <li style={{fontSize:'4vh', margin: '2vh'}}>Location 6</li>
              </ul>
            </div>        
        </div>
      </div>
    </>
  );
}

export default HomePage;
