import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2'; // Import Bar from 'react-chartjs-2'
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import styled from 'styled-components';

const ProgressGraph = ({ data }) => {
  const chartData = useMemo(() => ({
    labels: data.map(entry => new Date(entry.date)),
    datasets: [{
      label: 'Progress',
      data: data.map(entry => entry.progress),
      backgroundColor: '#FFBD33', // Set the bar color to blue
    }]
  }), [data]);

  const chartOptions = useMemo(() => ({
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return `${value}%`;
          }
        },
        title: {
          display: true,
          text: 'Progress (%)'
        }
      },
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'MMM dd',
          displayFormats: {
            day: 'MMM dd'
          }
        },
        title: {
          display: true,
          text: 'Date'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Progress: ${context.raw}%`;
          }
        }
      }
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      }
    },
    // Adjust bar width here
    indexAxis: 'x', // Set the index axis to x-axis for bar chart
    barPercentage: 0.2, // Adjust the width of the bars (0.6 means 60% of available space)
    categoryPercentage: 0.2 // Adjust the space between bars (0.8 means 80% of available space)
  }), []);
  

  return (
    <GraphContainer>
      <Bar data={chartData} options={chartOptions} /> {/* Use Bar component */}
    </GraphContainer>
  );
};

ProgressGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  })).isRequired
};

const GraphContainer = styled.div`
  width: 100%;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export default ProgressGraph;
