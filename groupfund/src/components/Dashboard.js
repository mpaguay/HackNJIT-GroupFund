import React from 'react'
import { Card, DonutChart, Title } from "@tremor/react";
import Calendar from 'react-calendar'

function Dashboard() {

  const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];

  const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <>
      <div className='flex m-4 h-100vh justify-center'>
        <Card className="w-1/3 h-full mx-4 p-6">
          <Title>Sales</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
        <Calendar className="w-1/3 border border-black p-6 bg-tremor-background" />
      </div>
    </>
  )
}

export default Dashboard