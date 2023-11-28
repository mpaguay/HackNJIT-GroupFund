import React from 'react'
import Navbar from './NavBar'
import Dashboard from './Dashboard'
import { Metric, Text } from "@tremor/react";
import { Card } from '@tremor/react';
import Transactions from './Transactions';

function MainPage() {
  return (
    <div>
        <Navbar />
        <Dashboard />
        <Transactions />
    </div>
  )
}

export default MainPage