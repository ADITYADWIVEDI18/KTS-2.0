import React from "react";
import computer from "../../assets/employee-business-profile.png";
import DomainCards from "./DomainCards";
import { domains } from '../../utils/domains';

const Domains = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 sm:flex-row">
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
        <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl mb-4">
          Our <span className="text-yellow-300">Domains</span>
        </h1>
        <p className="text-white mb-8">
          kldhfgewifhgwfkherwbgfekrghhjegrjfb
          <br />
          hbgshvfdsgjhdsvdfbhsfgsfiyhwgfvrhfsvgrfiysgvbfhsfy
          <br />
          ufgbwhfvrfyuwfrbhrsbfrsufygbdshfbdsfuysvfhsdfbvsiyfgsiufbsf
        </p>
        <img src={computer} alt="Computer" className="w-full" />
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/3 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <DomainCards
              key={domain.index}
              index={domain.index}
              name={domain.name}
              description={domain.description}
              image={domain.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
