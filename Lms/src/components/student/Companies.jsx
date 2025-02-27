import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center text-xl gap-8">
      <p>Trusted by learners from</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <img src={assets.microsoft_logo} alt="Microsoft" className=" sm:w-20 md:w-28" />
        <img src={assets.walmart_logo} alt="Walmart" className="sm:w-20 md:w-28" />
        <img src={assets.accenture_logo} alt="Accenture" className="sm:w-20 md:w-28" />
        <img src={assets.adobe_logo} alt="Adobe" className="sm:w-20 md:w-28" />
        <img src={assets.paypal_logo} alt="Paypal" className="sm:w-20 md:w-28" />
      </div>
    </div>
  );
};

export default Companies;
