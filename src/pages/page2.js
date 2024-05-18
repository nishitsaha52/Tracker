// Page2.js
import React from 'react';
import BottomNavigation from "../components/BottomNavigation"
import './page.css';

const Page2 = () => {
  return (
    <div className="page">
    <div className="page-container">
      <div className="page-content">
        <h1>Page 2</h1>
        {/* Your page content */}
      </div>
    </div>
    <BottomNavigation/>
    </div>
  );
};

export default Page2;
