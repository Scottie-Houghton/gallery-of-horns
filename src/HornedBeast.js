import React from 'react';
// import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites +1
    })
  }

  render () {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.state.favorites} ❤️</p>
        <p>Click image to favorite this beast!</p>
        <img
          onClick={this.handleFavorites}
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.description}
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;