import React from "react";
import { BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3090,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2090,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2500,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2800,
    amt: 2100,
  },

  {
    name: "Page H",
    uv: 1500,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 1000,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2500,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2400,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3000,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3200,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3100,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3700,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2400,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <BarChart width={900} height={180} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
}
