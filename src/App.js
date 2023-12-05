import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const centerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    };
  
    const intro = "이름: 권용민\n 나이: 23살\n혈액형: A 형"
    document.getElementById("sss").innerHTML=intro;
    return (
      <div style={centerStyle}>
        <h3>자기소개 </h3>
        <p class ="sss"></p>
      </div>
    );
  }
}

export default App;