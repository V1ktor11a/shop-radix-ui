import React, { useRef } from 'react';
import './Main.css';
import CardComponent from './Card';

const Main = ({ addItemToCart }) => {
  const scrollContainerRef = useRef(null);

  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      image: '/images/1.png',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description for Product 2',
      image: '/images/2.png',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description for Product 3',
      image: '/images/3.png',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Description for Product 4',
      image: '/images/4.png',
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Description for Product 5',
      image: '/images/5.png',
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Description for Product 6',
      image: '/images/6.png',
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Description for Product 7',
      image: '/images/7.png',
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Description for Product 8',
      image: '/images/8.png',
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'Description for Product 9',
      image: '/images/9.png',
    },
    {
      id: 10,
      title: 'Product 10',
      description: 'Description for Product 10',
      image: '/images/10.png',
    },
    {
      id: 11,
      title: 'Product 11',
      description: 'Description for Product 11',
      image: '/images/11.png',
    },
    {
      id: 12,
      title: 'Product 12',
      description: 'Description for Product 12',
      image: '/images/12.png',
    },
    {
      id: 13,
      title: 'Product 13',
      description: 'Description for Product 13',
      image: '/images/13.png',
    },
    {
      id: 14,
      title: 'Product 14',
      description: 'Description for Product 14',
      image: '/images/14.png',
    },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className='main'>
      <h2>Products</h2>
      <div className='scroll-area'>
        <button className='scroll-button left' onClick={scrollLeft}>
          ←
        </button>
        <div className='card-container' ref={scrollContainerRef}>
          {products.map((product) => (
            <CardComponent
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              onAddToCart={addItemToCart}
            />
          ))}
        </div>
        <button className='scroll-button right' onClick={scrollRight}>
          →
        </button>
      </div>
    </section>
  );
};

export default Main;
