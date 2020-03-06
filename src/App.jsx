import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home';
import NavBar from './components/OurNavBar';
import Advice from './components/Advice';
import OurForm from './components/OurForm';
import Graphics from './components/Graphics';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataForm from './components/data/dataForm.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeHome: true,
      activeAdvice: false,
      activeForm: false,
      activeGraphics: false
    };
    this.changeActiveComponent = this.changeActiveComponent.bind(this);
  }

  changeActiveComponent(active, noactive) {
    if (active !== noactive) {
      this.setState(previousState => {
        return {
          [active]: !previousState[active],
          [noactive]: !previousState[noactive]
        };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar
          changeComponent={(active, noactive) => this.changeActiveComponent(active, noactive)}
        />
        {(this.state.activeHome && <Home />) ||
          (this.state.activeAdvice && <Advice />) ||
          (this.state.activeForm && <OurForm dataForm={dataForm} />) ||
          (this.state.activeGraphics && <Graphics />)}
      </div>
    );
  }
}

export default App;
