import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import List from './List';

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <Content />
      <hr />
      <List title="Benefits">
        <li>React components are reusable</li>
        <li>Components are readable</li>
        <li>React uses the npm ecosystem</li>
      </List>
      <hr />
      <Footer />
    </>
  )
}

export default App;