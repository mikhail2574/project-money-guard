import React from 'react';
import StatisticsTab from 'ui/pages/StatisticsTab/StatisticsTab';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StatisticsTab />
    </div>
  );
};
