import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleResponse = responseType => {
    setState(prevState => ({
      ...prevState,
      [responseType]: prevState[responseType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((state.good / totalFeedback) * 100);
  };

  const options = Object.keys(state);
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleResponse} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
