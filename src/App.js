import React from 'react';
import logo from './logo.svg';
import './App.css';
import Color from './Color.js';
import { connect } from 'react-redux';
import Buttons from './Buttons';

let App = (props) =>(
  <div className="App">
    <div style={{backgroundColor: "black", color: "white", textAlign: 'center', padding: '30px'}}>
      <h1>Color Generator</h1>
    </div>
    <hr />
    <div className="proposed">
      <h3>Do you want this color?</h3>
      <Color hex={props.proposedColor}/>
    </div>
    <hr />
    <Buttons foo="bar"/>
    <div className="palette">
      {props.palette.map((hex, i) => <Color key={i} hex={hex} />)} 
    </div>
  </div>
);

let mapStateToProps = (state) => {
  return {
    proposedColor: state.proposedColor,
    palette: state.palette
  }
}



export default connect(
  mapStateToProps,
  null
)(App);
