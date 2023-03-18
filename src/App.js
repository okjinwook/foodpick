import './App.css';
import Header from './components/home/header';
import Main from './components/home/main';
import Footer from './components/home/footer';
import React from 'react';


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
