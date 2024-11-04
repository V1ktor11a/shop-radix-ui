import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Hero from './components/Hero';

function App() {
  const [theme, setTheme] = useState('light');
  const [itemCount, setItemCount] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const addItemToCart = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Theme>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        itemCount={itemCount}
        addItemToCart={addItemToCart}
      />
      <Hero />
      <Main addItemToCart={addItemToCart} />
      <Footer />
    </Theme>
  );
}

export default App;
