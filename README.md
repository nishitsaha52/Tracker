# Fitness Tracker

The Fitness Tracker is a Next.js-based web application designed to help users track their progress, manage goals, and navigate through different sections of the application efficiently. With a user-friendly interface and intuitive features, the application aims to enhance productivity and goal achievement for its users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Pages](#pages)
- [Contributing](#contributing)

## Features

Certainly! Here's a summary of all the features present in the project:

1. **Bottom Navigation:**
   - Provides a bottom navigation bar for easy navigation between pages.
   - Includes links to different pages of the application.

2. **Swipe Button:**
   - Allows users to trigger an action by swiping.
   - Provides visual feedback with animations indicating the swipe action.

3. **Progress Bar:**
   - Displays progress towards a daily goal or task.
   - Visualizes progress percentage with a horizontal bar and accompanying text.

4. **Progress Graph:**
   - Visualizes progress data in a bar chart format.
   - Enables tracking progress trends over time using the `react-chartjs-2` library.

5. **Goal Tracker:**
   - Allows users to set and track their goals within the application.


## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage

1. Start the development server with `npm start`.
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Components

### BottomNavigation

Description of the `BottomNavigation` component.

```jsx
import BottomNavigation from './components/BottomNavigation';
...
<BottomNavigation />
```

### GoalTracker

Description of the `GoalTracker` component.

```jsx
import GoalTracker from './components/GoalTracker';
...
<GoalTracker />
```

### SwipeButton

Description of the `SwipeButton` component.

```jsx
import SwipeButton from './components/SwipeButton';
...
<SwipeButton onSwipe={handleSwipe} />
```

### ProgressBar

Description of the `ProgressBar` component.

```jsx
import ProgressBar from './components/ProgressBar';
...
<ProgressBar progress={progress} currentStep={currentStep} totalSteps={totalSteps} />
```

### ProgressGraph

Description of the `ProgressGraph` component.

```jsx
import ProgressGraph from './components/ProgressGraph';
...
<ProgressGraph data={progressData} />
```

## Styling

Styling in this project is done using `styled-components` for component-based styling. Each component has its own styles defined using styled-components.

## Pages

### Page2

Description of Page2.

```jsx
import Page2 from './pages/Page2';
...
<Route path="/page2" component={Page2} />
```

### Page3

Description of Page3.

```jsx
import Page3 from './pages/Page3';
...
<Route path="/page3" component={Page3} />
```

### Page4

Description of Page4.

```jsx
import Page4 from './pages/Page4';
...
<Route path="/page4" component={Page4} />
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

You can customize this template according to the specifics of your project. Add descriptions, links, or any other relevant information. Let me know if you need further assistance!
