import React from 'react';
import Card from 'react-bootstrap/Card'
// import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }

  // handleFavorites = () => {
  //   this.setState({
  //     favorites: this.state.favorites +1
  //   })
  // }

  handleImgClick = () => {
    this.props.handleOnShowModal(this.props.imageUrl);
  }
  
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        {/* <p>Click image to favorite this beast!</p> */}
        <Card.Img
          variant="top"
          // onClick={this.handleFavorites}
          style={{cursor: 'pointer'}}
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.description}
          onClick={() => {this.props.handleOnShowModal(this.props.beast)}}
          // onClick={this.handleImgClick}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <p>{this.state.favorites} ❤️</p>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;