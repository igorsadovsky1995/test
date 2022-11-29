
import React from 'react';
import './App.css';
import "./Components/header.css"
import "./Components/footer.css"
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Main   from "./Components/Main";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
    }

  }
  render(){
    return(
      <div className='wrapper'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
  
}

export default App;
