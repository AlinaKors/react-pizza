import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import EmptyCart from './EmptyCart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmptyCart />
  </StrictMode>,
);
