import React from 'react';

class HornedBeast extends React.Component {
  render () {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <img src="https://via.placeholder.com/250x250.png" alt="A Unicorn" title="A Unicorn is a one-horned horse" />
        <p>Description of HornedBeast</p>
      </article>
    )
  }
}

export default HornedBeast;