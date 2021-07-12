import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import LeftMenu from './components/LeftMenu';
import Rightmenu from './components/RightMenu';
import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/Nav';

function App() {




  return (
    <div className="App">
   <Nav/>
    <Sidebar />
    <LeftMenu />
    <Main />
    <Rightmenu />

    {/* <div className="sidebar">Sidebar</div>
    <div className="leftmenu">Left Menu</div>
    <div className="content">Main</div>
    <div className="rightmenu">Right Menu</div> */}
    </div>
  );
}

export default App;
