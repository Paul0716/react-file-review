import styles from './app.module.scss';
import Header from '../ui/header/header';
import React from 'react';

export function App() {
  return (
    <React.Fragment>
      <Header />
      <div>content</div>
    </React.Fragment>
  );
}

export default App;
