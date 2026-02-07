
import React from 'react';
import { Button } from 'semantic-ui-react'
import { Navigation } from './routes';
import { ClientLayout } from './layouts/ClientLayout';
import { AdminLayout } from './layouts/AdminLayout';


export default function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Hola Mundo.</h1>
      <Navigation />
    </div>
  );
}
