"use client";

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const SwipeButton = ({ onSwipe }) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipe = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
      onSwipe();
    }, 1000);
  };

  return (
    <ButtonContainer onClick={handleSwipe}>
      <SwipeableButton isSwiped={isSwiped}>
        <TrackText>Track</TrackText>
        <ArrowContainer>
          <Arrow isSwiped={isSwiped}>&gt;&gt;&gt;</Arrow>
        </ArrowContainer>
      </SwipeableButton>
      <SwipeText>Swipe to track all</SwipeText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FF5722;
  color: white;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  position: relative;
`;

const SwipeableButton = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: #FF5722;
  padding: 5px 10px;
  border-radius: 50px;
  position: relative;
  left: ${({ isSwiped }) => (isSwiped ? 'calc(100% - 120px)' : '0')};
  transition: left 0.3s ease;
`;

const TrackText = styled.div`
  background-color: #FF5722;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 12px;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

const Arrow = styled.div`
  font-size: 16px;
  transition: transform 0.3s ease;
  transform: ${({ isSwiped }) => (isSwiped ? 'translateX(10px)' : 'translateX(0)')};
`;

const SwipeText = styled.div`
  margin-left: 10px;
  font-size: 16px;
`;

export default SwipeButton;
