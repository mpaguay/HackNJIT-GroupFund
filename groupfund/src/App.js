import React from 'react';
import MainPage from './components/MainPage';
import { Card, Text, Metric } from '@tremor/react';
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className='bg-gradient-to-t from-indigo-300 via-indigo-500 to-indigo-600 h-screen'>
      <MainPage />
    </div>
    
  )
}

export default App
