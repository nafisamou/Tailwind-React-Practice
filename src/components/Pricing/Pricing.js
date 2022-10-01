import React from "react";
import PricingOption from "../PricingOptions/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Everything on Free",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: (19.99).toExponential,
      features: [
        "Everything on Premium",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold bg-indigo-300 text-white p-12 m-1 ">
        Best Deal of the town
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {pricingOptions.map(option => 
          <PricingOption key={option.id} option={option}></PricingOption>
        )}
      </div>
    </div>
  );
};

export default Pricing;
