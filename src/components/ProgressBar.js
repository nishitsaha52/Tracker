import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image'

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <Wrapper>
      <ContentContainer>
      <LogoWrapper>
    <Image
      src="/logo.png"
      width={60}
      height={60}
      alt="logo"
    />
  </LogoWrapper>
        <TextContainer>
          <Title>Your Daily Goal Almost Done</Title>
          <Subtitle>{currentStep} of {totalSteps} Completed</Subtitle>
          <Container>
            <Progress progress={progress} />
          </Container>
        </TextContainer>
      </ContentContainer>
      <Percentage>{progress.toFixed(1)}%</Percentage>
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #4e8af4 0%, #00FFFF 100%); /* Linear gradient */
  border-radius: 10px;
  padding: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
`;

const LogoWrapper = styled.div`
  margin-right: 10px;
  margin-top: 10px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #FFC300;
  border-radius: ${props => (props.progress === 100 ? '10px' : '10px 0 0 10px')};
  transition: width 0.5s ease-in-out;
`;

const Percentage = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

export default ProgressBar;
