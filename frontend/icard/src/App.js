
import React from 'react';
import { Button } from 'semantic-ui-react'
import { Navigation } from './routes';


export default function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Hola mundo</h1>
      <Navigation />
      <Button primary>Click me</Button>
    </div>
  );
}
