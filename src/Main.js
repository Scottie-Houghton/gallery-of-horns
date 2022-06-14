import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render () {
    return (
      <main>
        <HornedBeast name="Unicorn"/>
        <HornedBeast name="Rhino"/>
        <HornedBeast name="Narwhal"/>
      </main>
    )
  }
}

export default Main;