"use client"
// Providers.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the import path based on your project structure

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
