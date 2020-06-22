import React from 'react';

const CodeEditor = () => {
  const style = {
    width: '50%',
  }

  return(
    <div style={style}>
      <h2>Try it out!</h2>
      <iframe height="265" style={{width: "100%"}} scrolling="no" title="Tic Tac Toe" src="https://codepen.io/gaearon/embed/oWWQNa?height=265&theme-id=light&default-tab=js,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href='https://codepen.io/gaearon/pen/oWWQNa'>Tic Tac Toe</a> by Dan Abramov
        (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </div>
  )
}

export default CodeEditor;