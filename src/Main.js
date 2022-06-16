import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, idx) => {

        return <HornedBeast
          imageUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          handleOnShowModal={this.props.handleOnShowModal}
          beast={beast}
          // keyword={beast.keyword}
          // horns={beast.horns}
          key={idx}
        />
    })
    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;