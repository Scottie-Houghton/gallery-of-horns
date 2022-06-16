import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render () {
    let beasts = []
    this.props.data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
          imageUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          // keyword={beast.keyword}
          // horns={beast.horns}
          key={idx}
          handleOnShowModal={this.props.handleOnShowModal}
        />
      )
    })
    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;