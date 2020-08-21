import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <>
      <AppRoutes />
      <StatusBar style="auto" />
    </>
  );
}