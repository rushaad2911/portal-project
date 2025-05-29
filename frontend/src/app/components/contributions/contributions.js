import React from 'react';
// import './ContributionGraph.css'; // We'll style this separately

export default function ContributionGraph({ data }) {
  const today = new Date();
  const days = 7;
  const weeks = 20;

  // Generate a grid of dates (last 20 weeks)
  const generateDates = () => {
    const dates = [];
    for (let i = weeks * days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      dates.push(d.toISOString().split('T')[0]); // Format: YYYY-MM-DD
    }
    return dates;
  };

  const getColor = (count) => {
    if (!count) return '#ebedf0'; // light gray for 0
    if (count < 3) return '#c6e48b';
    if (count < 6) return '#7bc96f';
    if (count < 9) return '#239a3b';
    return '#196127';
  };

  const allDates = generateDates();

  return (
    <div className="graph-container">
      {Array.from({ length: weeks }).map((_, weekIdx) => (
        <div className="week-column" key={weekIdx}>
          {Array.from({ length: days }).map((_, dayIdx) => {
            const dateIdx = weekIdx * days + dayIdx;
            const date = allDates[dateIdx];
            const count = data[date] || 0;
            return (
              <div
                key={date}
                className="day-square"
                title={`${date}: ${count} contribution(s)`}
                style={{ backgroundColor: getColor(count) }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
