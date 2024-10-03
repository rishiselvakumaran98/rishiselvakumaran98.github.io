// ExperienceItem.jsx
import React from 'react';

const ExperienceItem = ({ title, logo, company, period, children, style }) => {
  return (
    <div className="experience-item">
      <span class="icon"><img style={style} src={logo}/></span>
      <h3 id="header-title" className="tac-tdu">{title}</h3>
      <h3 className="tac">{company}</h3>
      <span className="tac">{period}</span>
      {children}
    </div>
  );
};

export default ExperienceItem;
