import React from 'react';

const List = props => {
  const style = {

  }

  return(
    <div class="benefits-list">
      <h2>{props.title}</h2>
      <ul>
        {props.children}

          {/* <li>React components are reusable</li>
          <li>Components are readable</li>
          <li>React uses the npm ecosystem</li> */}
      </ul>
    </div>
  )
}

export default List;