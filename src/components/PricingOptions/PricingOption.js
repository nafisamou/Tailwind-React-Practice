import React from "react";
import Feature from "../Features/Feature";

const PricingOption = ({ option }) => {
  const { features } = option;
  console.log(features);
  return (
    <div className="bg-indigo-300 p-9 rounded-lg  font-sans text-white m-4">
      
        <div>
        <p>
          <span className="text-6xl font-bold">{option.price}</span>
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
      <button className="bg-green-500 w-full rounded-md py-2 text-white font-bold mt-5 mb-6">Buy</button>
    </div>
  );
};

export default PricingOption;
