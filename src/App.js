import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import {Form, Button, ListGroup} from 'react-bootstrap'
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      howtoSort: '',
      sortedData: data,
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShowModal = (title) => {
    this.setState({
      showModal: true,
      selectedBeast: title,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let hornsGroup = event.target.selected.value;
    this.setState({
      howToSort: hornsGroup,
    });
  };

  handleSelect = event => {
    let hornsGroup = event.target.value;
    if (hornsGroup === 'one') {
      let newData = data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (hornsGroup === 'two') {
      let newData = data.filter(num => num.horns === 2);
      this.setState({
        sortedData: newData
      });
    } else if (hornsGroup === 'three') {
      let newData = data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (hornsGroup === 'alotof') {
      let newData = data.filter(num => num.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else {
      this.setState({
        sortedData: data
      });
    }
  };


  render() {

    // let hornsNumber = this.state.sortedData.map((beast, idx) => {
    //   return <ListGroup.Item key={idx}>{beast.horns}</ListGroup.Item>
    // })
    
    return (
      <>
        <Header/>
        <Form onSubmit={this.handleSubmit}>
          {/* <label>Name:
            <input type="text" name="name"/>
          </label> */}
          <Form.Group>
            <p>Choose which horned beasts you want:</p>
            <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="all">All the Beasts!</option>
              <option value="one">One-Horned Beasts</option>
              <option value="two">Two-Horned Beasts</option>
              <option value="three">Three-Horned Beasts</option>
              <option value="alotof">A-Lot-of-Horned Beasts</option>
            </Form.Select>
          </Form.Group>
          {/* <Button type="submit">Bring me the beasts!</Button> */}
        </Form>
        <Main
          data={this.state.sortedData}
          handleOnShowModal={this.handleOnShowModal}
        />
        {/* <ListGroup>
          {hornsNumber}
        </ListGroup> */}
        <Footer/>
        <SelectedBeast
          showModal = {this.state.showModal}
          hideModal = {this.handleOnHide}
          selectedBeast = {this.state.selectedBeast}
        />
      </>
    );
  }
}

export default App;
