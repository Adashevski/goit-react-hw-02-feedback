import React from 'react';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={styles['FeedbackBtn']}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
