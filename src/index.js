import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MantineProvider>
  </BrowserRouter>
);