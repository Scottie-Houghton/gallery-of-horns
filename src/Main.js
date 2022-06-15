import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render () {
    let beasts = []
    data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
          imageUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          // keyword={beast.keyword}
          // horns={beast.horns}
          key={idx}
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