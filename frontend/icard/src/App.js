
import React from 'react';
import { Button } from 'semantic-ui-react'
import { Navigation } from './routes';
import { ClientLayout } from './layouts/ClientLayout';
import { AdminLayout } from './layouts/AdminLayout';


export default function App() {
  return (
    <div className="app">

      <AdminLayout> 
        <ClientLayout>
          <h1 className='app__title'>Hola mundo</h1>
          <Navigation />
          <Button primary>Click me</Button>
        </ClientLayout>

      </AdminLayout>


    </div>
  );
}
