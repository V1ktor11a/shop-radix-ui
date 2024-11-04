import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <img src='/images/hero.jpg' alt='Hero Section' className='hero-image' />
      <div className='hero-content'>
        <h1>Welcome to Our Store</h1>
        <p>
          Discover our exclusive collection of products tailored to meet your
          needs. Start exploring now and find high-quality items that perfectly
          suit your lifestyle and preferences.
        </p>
        <p>
          Whether you're looking for the latest trends, everyday essentials, or
          unique gifts, we've got something for everyone. Dive into a shopping
          experience designed just for you!
        </p>
      </div>
    </section>
  );
};

export default Hero;
