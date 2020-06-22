import React from 'react';
import Description from './Description';
import CodeEditor from './CodeEditor'

const Content = () => {
  const style = {
    display: 'flex',
  }

  return(
    <div style={style}>
      <Description title="What is React?">
        <p>
          React components implement a render() method that takes input data and returns what to display. 
          This example uses an XML-like syntax called JSX. Input data that is passed into the component can 
          be accessed by render() via this.props.
        </p>

        <p>
          JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code 
          produced by the JSX compilation step.
        </p>
      </Description>
      <CodeEditor />
    </div>
  )
}

export default Content;