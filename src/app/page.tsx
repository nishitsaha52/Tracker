"use client";

import React from 'react';
import GoalTracker from '../components/GoalTracker';
import ProgressBar from '../components/ProgressBar';
import ProgressGraph from '../components/ProgressGraph';
import BottomNavigation from '../components/BottomNavigation';
import styled from 'styled-components';

const initialGoals = [
  { name: "Workout for 20 mins", completed: false },
  { name: "Read book for 15 mins", completed: false },
  { name: "30 mins walk", completed: false },
  { name: "Sleep at 11 sharp", completed: false },
  { name: "Drink 3L water", completed: false },
];

// Define an interface for progress data
interface ProgressData {
  date: string;
  progress: number;
}

const Home: React.FC = () => {
  const [goals, setGoals] = React.useState(initialGoals);
  const [progressData, setProgressData] = React.useState<ProgressData[]>([]);

  React.useEffect(() => {
    const savedGoalsString = localStorage.getItem('goals');
    const savedGoals = savedGoalsString ? JSON.parse(savedGoalsString) : initialGoals;
    setGoals(savedGoals);

    const savedProgressDataString = localStorage.getItem('progressData');
    const savedProgressData: ProgressData[] = savedProgressDataString ? JSON.parse(savedProgressDataString) : [];
    setProgressData(savedProgressData);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));

    const progress = (goals.filter(goal => goal.completed).length / goals.length) * 100;
    const today = new Date().toLocaleDateString();

    const newProgressData = [...progressData];
    const todayDataIndex = newProgressData.findIndex((data: ProgressData) => data.date === today);

    if (todayDataIndex >= 0) {
      newProgressData[todayDataIndex].progress = progress;
    } else {
      newProgressData.push({ date: today, progress });
    }

    setProgressData(newProgressData);
    localStorage.setItem('progressData', JSON.stringify(newProgressData));
  }, [goals, progressData]);

  const progress = (goals.filter(goal => goal.completed).length / goals.length) * 100;

  return (
    <div className="home">
    <Container>
      <Content>
        <ProgressBar progress={progress} currentStep={goals.filter(goal => goal.completed).length} totalSteps={goals.length} />
        <Title>Todays Goal</Title>
        <GoalTracker goals={goals} setGoals={setGoals} />
        <ProgressGraph data={progressData} />
      </Content>
    </Container>
    <BottomNavigation />
    </div>
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
