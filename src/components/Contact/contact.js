  import React from "react";
  import './contact.css';
  import Walmart from '../../assets/walmart.png';
  import Adobe from '../../assets/adobe.png';
  import Microsoft from '../../assets/microsoft.png';
  import Facebook from '../../assets/facebook.png'

  const Contact = () => {
    return (
        <section className="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the oppurtunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="client" className="clientImg"/>
                    <img src={Adobe} alt="client" className="clientImg"/>
                    <img src={Microsoft} alt="client" className="clientImg"/>
                    <img src={Facebook} alt="client" className="clientImg"/>

                </div>
            </div>
        </section>
    )
  }

  export default Contact