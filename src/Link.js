import React from 'react';

const Link = props => {
  const style = {
    margin: '5px',
  }

  return(
    <a style={style} href={props.href}>{props.children}</a>
  )
}

export default Link;