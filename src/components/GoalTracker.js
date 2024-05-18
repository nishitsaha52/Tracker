import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaDumbbell, FaBook, FaWalking, FaBed, FaTint } from 'react-icons/fa';
import SwipeButton from './SwipeButton';

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

  const getIcon = useMemo(() => (name) => {
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
  }, []);

  const getIconColor = useMemo(() => (name) => {
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
  }, []);

  return (
    <Container>
      {goals.map((goal, index) => (
        <GoalContainer key={index} onClick={() => toggleGoal(index)}>
          <GoalItem completed={goal.completed}>
            <IconContainer iconColor={getIconColor(goal.name)}>
              <Icon>{getIcon(goal.name)}</Icon>
            </IconContainer>
            <GoalText>{goal.name}</GoalText>
            <CustomCheckbox
              type="checkbox"
              checked={goal.completed}
              onChange={() => {}}
              aria-label={`Toggle ${goal.name}`}
              checkboxColor={getIconColor(goal.name)}
            />
          </GoalItem>
        </GoalContainer>
      ))}
      <SwipeButton onSwipe={trackAllGoals} />
    </Container>
  );
};

GoalTracker.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setGoals: PropTypes.func.isRequired,
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: #000;
  border-radius: 10px;
  padding: 10px;
`;

const GoalContainer = styled.div`
  cursor: pointer;
  margin-bottom: 10px; /* Add space between goal containers */
`;

const GoalItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 15px;
  border-radius: 8px;
  opacity: ${({ completed }) => (completed ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

const CustomCheckbox = styled.input`
  margin-left: auto;
  width: 24px; /* Increase checkbox width */
  height: 24px; /* Increase checkbox height */
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
      top: 4px; /* Adjust the position of the checkmark */
      left: 8px; /* Adjust the position of the checkmark */
      width: 8px; /* Adjust the size of the checkmark */
      height: 12px; /* Adjust the size of the checkmark */
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

const GoalText = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  color: white;
  font-size: 16px;
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

const Icon = styled.div`
  font-size: 24px;
  color: white;
`;

export default GoalTracker;
