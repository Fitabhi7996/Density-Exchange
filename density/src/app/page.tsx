// pages/_app.js
import React from 'react';
import Navbar from '../app/components/Navbar';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Home from "../app/components/Home"
import Middle from './components/middle';

function MyApp( ) {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
    </div>
      
  );
}

export default MyApp;
