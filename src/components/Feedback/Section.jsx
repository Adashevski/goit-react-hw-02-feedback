import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles['title']}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
