import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home';
import NavBar from './components/OurNavBar';
import Advice from './components/Advice';
import OurForm from './components/OurForm';
import Graphics from './components/Graphics';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataForm from './components/data/dataForm.json';
import data from './components/data/final_test.json';


class App extends Component {
  constructor() {
    super();
    this.ourData = this.createDataState();
    this.state = {
      activeHome: true,
      activeAdvice: false,
      activeForm: false,
      activeGraphics: false,
      data: this.ourData
    };
    this.changeActiveComponent = this.changeActiveComponent.bind(this);
    this.addData = this.addData.bind(this);
  }

  createDataState(){
    const values = Object.values(data);
    values.splice(0, 10);
    return values.map((entry) => {return Object.values(entry)});
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

  addData(submission){
    const entries = Object.entries(submission)
    entries.splice(0, 10);

    this.setState((previousState => {
      const newState = previousState.data.slice();
      entries.map(entry => {
        const key = Number(entry[0].substring(1)) - 11;
        return newState[key].push(entry[1])
      });
      return {
        data: newState
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <NavBar
          changeComponent={(active, noactive) => this.changeActiveComponent(active, noactive)}
        />
        {(this.state.activeHome && <Home />) ||
          (this.state.activeAdvice && <Advice />) ||
          (this.state.activeForm && <OurForm dataForm={dataForm} data={data} addData={(submission) => this.addData(submission)}           changeComponent={(active, noactive) => this.changeActiveComponent(active, noactive)}/>) ||
          (this.state.activeGraphics && (<Graphics data={this.state.data}/>))}
      </div>
    );
  }
}

export default App;
