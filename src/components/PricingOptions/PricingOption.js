import React from "react";
import Feature from "../Features/Feature";

const PricingOption = ({ option }) => {
  const { features } = option;
  console.log(features);
  return (
    <div className="bg-indigo-300 p-4 rounded-lg  font-sans text-white m-3">
      
        <div>
        <p>
          <span className="text-5xl font-bold">{option.price}</span>
          <span className="text-2xl text-gray-200 font-bold">/mon</span>
        </p>
        <p className="mt-2 text-2xl text-black font-semibold my-4">
          {option.name}
        </p>
      
        </div>
        {
      features.map((feature, idx) => 
        <Feature key={idx} feature={feature}></Feature>
      )}
      <button className="bg-green-500 w-full"></button>
    </div>
  );
};

export default PricingOption;
