"use client";

import React, { useState, useEffect } from 'react';
import GoalTracker from '../components/GoalTracker';
import ProgressBar from '../components/ProgressBar';
import ProgressGraph from '../components/ProgressGraph';
import BottomNavigation from '../components/BottomNavigation';

import styled from 'styled-components';

const initialGoals = [
  { name: 'Workout for 20 mins', completed: false },
  { name: 'Read book for 15 mins', completed: false },
  { name: '30 mins walk', completed: false },
  { name: 'Sleep at 11 sharp', completed: false },
  { name: 'Drink 3L water', completed: false },
];

const Home = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || initialGoals;
    setGoals(savedGoals);

    const savedProgressData = JSON.parse(localStorage.getItem('progressData')) || [];
    setProgressData(savedProgressData);
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));

    const progress = (goals.filter(goal => goal.completed).length / goals.length) * 100;
    const today = new Date().toLocaleDateString();

    const newProgressData = [...progressData];
    const todayDataIndex = newProgressData.findIndex(data => data.date === today);

    if (todayDataIndex >= 0) {
      newProgressData[todayDataIndex].progress = progress;
    } else {
      newProgressData.push({ date: today, progress });
    }

    setProgressData(newProgressData);
    localStorage.setItem('progressData', JSON.stringify(newProgressData));
  }, [goals]);

  const progress = (goals.filter(goal => goal.completed).length / goals.length) * 100;

  return (
    <Container>
      <Content>
        <ProgressBar progress={progress} currentStep={goals.filter(goal => goal.completed).length} totalSteps={goals.length} />
        <Title>Today's Goal</Title>
        <GoalTracker goals={goals} setGoals={setGoals} />
        <ProgressGraph data={progressData} />
        <BottomNavigation />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin: 20px 0;
  color: #fff;
`;

export default Home;
