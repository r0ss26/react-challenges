import React from 'react';

const Description = props => {
  return(
    <div>
      <h2>{props.title}</h2>
        {props.children}
    </div>
  )
}

export default Description;