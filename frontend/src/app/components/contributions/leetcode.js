"use client";
import { useEffect, useState } from 'react';
import "../styles/leetcode.css";
export default function LeetCodeStats({ username }) {
  const [activityData, setActivityData] = useState({});
  const [totalSolved, setTotalSolved] = useState(null);

  useEffect(() => {
    async function fetchLeetcodeData() {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await res.json();

        setTotalSolved(data["totalSolved"]);

        const calendar = data.submissionCalendar || {};
        const formatted = {};

        for (const timestamp in calendar) {
          const date = new Date(parseInt(timestamp) * 1000)
            .toISOString()
            .split('T')[0];
          formatted[date] = calendar[timestamp];
        }

        setActivityData(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchLeetcodeData();
  }, [username]);

  return (
    <div className="leetcode-component">
      <p className="">LeetCode</p>

      <p>Total Questions Solved: <strong>{totalSolved !== null ? totalSolved : 'Loading...'}</strong></p>

    </div>
  );
}
