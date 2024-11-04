import React, { useState } from 'react';
import { Card, Box, Inset, Text, Strong, Button } from '@radix-ui/themes';
import * as Popover from '@radix-ui/react-popover';

import { FaShoppingCart } from 'react-icons/fa';
import './Card.css';

const CardComponent = ({ image, title, description, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Red');
  const [isOpen, setIsOpen] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <Box maxWidth='350px'>
      <Card size='2' className='card'>
        <Inset clip='padding-box' side='top' pb='current'>
          <img
            src={image}
            alt={title}
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 200,
              backgroundColor: 'var(--gray-5)',
            }}
          />
        </Inset>
        <Text as='h3' size='3'>
          <Strong>{title}</Strong>
        </Text>
        <Text as='p' size='2'>
          {description}
        </Text>
        <div className='card-controls'>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button className='outline-button'>
                Choose a color: {selectedColor}
              </Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className='popover-content'>
                <Popover.Arrow className='popover-arrow' />
                {['Red', 'Green', 'Blue'].map((color) => (
                  <Button
                    key={color}
                    onClick={() => handleColorSelect(color)}
                    style={{ display: 'block', margin: '5px 0' }}
                  >
                    {color}
                  </Button>
                ))}
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <Button className='add-to-cart-button' onClick={onAddToCart}>
            <FaShoppingCart /> Add to cart
          </Button>
        </div>
      </Card>
    </Box>
  );
};

export default CardComponent;
