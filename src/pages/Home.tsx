import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PricingPlans from '../components/PricingPlans';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <PricingPlans />
      <Newsletter />
    </>
  );
};

export default Home;