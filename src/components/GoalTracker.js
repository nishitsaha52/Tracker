import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaDumbbell, FaBook, FaWalking, FaBed, FaTint } from 'react-icons/fa';
import SwipeButton from './SwipeButton';

// Helper function to get the icon based on the goal name
const getIcon = (name) => {
  switch (name) {
    case 'Workout for 20 mins':
      return <FaDumbbell />;
    case 'Read book for 15 mins':
      return <FaBook />;
    case '30 mins walk':
      return <FaWalking />;
    case 'Sleep at 11 sharp':
      return <FaBed />;
    case 'Drink 3L water':
      return <FaTint />;
    default:
      return null;
  }
};

// Helper function to get the icon color based on the goal name
const getIconColor = (name) => {
  switch (name) {
    case 'Workout for 20 mins':
      return '#6C63FF';
    case 'Read book for 15 mins':
      return '#FF6B6B';
    case '30 mins walk':
      return '#66BB6A';
    case 'Sleep at 11 sharp':
      return '#4FC3F7';
    case 'Drink 3L water':
      return '#FFC300';
    default:
      return '#333';
  }
};

const GoalTracker = ({ goals, setGoals }) => {
  const [isTrackingAll, setIsTrackingAll] = useState(false);

  const toggleGoal = useCallback((index) => {
    const newGoals = [...goals];
    newGoals[index].completed = !newGoals[index].completed;
    setGoals(newGoals);
  }, [goals, setGoals]);

  const trackAllGoals = useCallback(() => {
    const newGoals = goals.map(goal => ({ ...goal, completed: true }));
    setGoals(newGoals);
    setIsTrackingAll(true);
    setTimeout(() => setIsTrackingAll(false), 2000);
  }, [goals, setGoals]);

  return (
    <Wrapper>
      {goals.map((goal, index) => (
        <GoalContainer key={index} onClick={() => toggleGoal(index)}>
          <GoalItem completed={goal.completed}>
            <IconContainer iconColor={getIconColor(goal.name)}>
              {getIcon(goal.name)}
            </IconContainer>
            <GoalText>{goal.name}</GoalText>
            <CustomCheckbox
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoal(index)} // Added toggleGoal to onChange
              aria-label={`Toggle ${goal.name}`}
              checkboxColor={getIconColor(goal.name)}
            />
          </GoalItem>
        </GoalContainer>
      ))}
      <SwipeButton onSwipe={trackAllGoals} />
    </Wrapper>
  );
};

// Setting the displayName property
GoalTracker.displayName = 'GoalTracker';

GoalTracker.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setGoals: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoalContainer = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
`;

const GoalItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  opacity: ${({ completed }) => (completed ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

const CustomCheckbox = styled.input`
  margin-left: auto;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  appearance: none;
  background-color: white;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: ${({ checkboxColor }) => checkboxColor};

    &:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 8px;
      width: 8px;
      height: 12px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

const GoalText = styled.span`
  flex-grow: 1;
  margin-left: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ iconColor }) => iconColor};
  margin-right: 10px;
`;

export default GoalTracker;
