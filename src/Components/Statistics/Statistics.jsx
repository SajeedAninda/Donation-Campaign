import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [donatedItemPercentageInt, setDonatedItemPercentageInt] = useState(0);
  const [totalItemPercentageInt, setTotalItemPercentageInt] = useState(0);

  useEffect(() => {
    fetch("/donationData.json")
      .then((res) => res.json())
      .then((data) => {
        const totalItemLength = data.length;
        const donatedItemLength = JSON.parse(localStorage.getItem("donation")).length;

        const donatedItemPercentage = ((donatedItemLength * 100) / totalItemLength).toFixed(2);
        const totalItemPercentage = (100 - donatedItemPercentage).toFixed(2);

        setDonatedItemPercentageInt(parseFloat(donatedItemPercentage));
        setTotalItemPercentageInt(parseFloat(totalItemPercentage));
      });
  }, []);

  const pieChartData = [
    {
      name: "Donated Items",
      value: donatedItemPercentageInt,
    },
    {
      name: "Total Items",
      value: totalItemPercentageInt,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="500" height="300">
        <PieChart data={pieChartData}>
          <Pie
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#8884d8"
            labelLine={true}
            label={
              ({ name, percent, cx, cy }) => ({
                x: cx / 2 + 10,
                y: cy / 2,
                dy: 10,
                textAnchor: "middle",
                children: `${name} (${percent}%)`,
              })
            }
          >
            <Cell fill="#82ca9d" />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
