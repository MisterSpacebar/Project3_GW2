import React from 'react';
import './Logo.css';
import financeLogo from "../../assets/logo.png";

const logo =(props) => (
   <div className="Logo">
       <img src={financeLogo} alt="logo" />
   </div>
);

export default logo;