import React from 'react';
import Link from './Link';

const Header = () => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <h1>React</h1>
      <div>
        <Link href="https://reactjs.org/tutorial/tutorial.html">Official Tutorial</Link>
        <Link href="https://github.com/facebook/react">Github Code</Link>
        <Link href="https://en.wikipedia.org/wiki/React_(web_framework)">Wikipedia</Link>
      </div>
    </div>
  )
}

export default Header;