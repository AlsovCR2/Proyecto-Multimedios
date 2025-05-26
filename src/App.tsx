import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Receta from './components/Receta';
import Ingredients from './components/Ingredients';
import StepByStep from './components/StepByStep';
import Registration from './components/Registration';
import Footer from './components/Footer';
export function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full max-w-5xl mx-auto px-4 pb-16">
        <Introduction />
        <Receta />
        <Ingredients />
        <StepByStep />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}