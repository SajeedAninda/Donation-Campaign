import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [donatedItemPercentageInt, setDonatedItemPercentageInt] = useState(0);
  const [totalItemPercentageInt, setTotalItemPercentageInt] = useState(0);

  useEffect(() => {
    fetch("/donationData.json")
      .then((res) => res.json())
      .then((data) => {
        const totalItemLength = data.length;
        const donatedItem = JSON.parse(localStorage.getItem("donation"));
        const donatedItemLength = donatedItem ? donatedItem.length : 0;

        const donatedItemPercentage = ((donatedItemLength * 100) / totalItemLength).toFixed(2);
        const totalItemPercentage = (100 - donatedItemPercentage).toFixed(2);

        setDonatedItemPercentageInt(parseFloat(donatedItemPercentage));
        setTotalItemPercentageInt(parseFloat(totalItemPercentage));
      });
  }, []);

  console.log(donatedItemPercentageInt, totalItemPercentageInt);

  const data = [
    { name: 'Your Donation', value: donatedItemPercentageInt },
    { name: 'Total Donation', value: totalItemPercentageInt },
  ];

  const COLORS = ['#00C49F', '#FF444A'];

  return (
    <div className='flex my-5 md:mt-0 justify-center items-center h-[70vh]'>
      <ResponsiveContainer>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx="50%" cy="50%" fill="#8884d8" dataKey="value" label={({
            cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
            return (
              <text className='text-2xl font-bold' x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" >
                {value}%
              </text>
            );
          }}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend/>
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
