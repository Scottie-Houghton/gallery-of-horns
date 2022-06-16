import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
// import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
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

  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer/>
        <SelectedBeast
          showModal = {this.state.showModal}
          hideModal = {this.handleOnHide}
          selectedBeast = {this.state.selectedBeast}
        />
        {/* <Modal
          show={this.state.showModal}
          onHide={this.handleOnHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>
        </Modal> */}
      </>
    );
  }
}

export default App;
