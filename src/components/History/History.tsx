import React from "react";
import { Briefcase as WorkIcon } from "react-feather";

const History = () => {
  return (
    <ul className="steps steps-vertical">
      <li data-content="💼" className="step step-primary">
        <div className="text-left py-5 text-xl">
          <h1 className="font-bold">2023 - Present</h1>
          <p>Junior Software Developer</p>
          <p>Cox Automotive</p>
        </div>
      </li>
      <li data-content="💼" className="step step-primary">
        <div className="text-left py-5 text-xl">
          <h1 className="font-bold">2022 - 2023</h1>
          <p>Software Developer Apprentice</p>
          <p>Cox Automotive</p>
        </div>
      </li>
      <li data-content="📚" className="step step-primary">
        <div className="text-left py-5 text-xl">
          <h1 className="font-bold">2017-2021</h1>
          <p>Bachelors Degree in Law (LLB)</p>
          <p>University of Law</p>
        </div>
      </li>
    </ul>
  );
};

export default History;
