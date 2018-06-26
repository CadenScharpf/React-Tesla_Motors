import React, { Component } from 'react';

//INCLUDES
import '/Users/caden/Developer/web_developer/react/my-app/src/assets/css/Home(minified).css'

//COMPONENTS
import Header from '/Users/caden/Developer/web_developer/react/my-app/src/components/header/header.js';
import Footer from '/Users/caden/Developer/web_developer/react/my-app/src/components/footer/footer.js';
import Info_Home from '/Users/caden/Developer/web_developer/react/my-app/src/components/info_home/info_home.js';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header/>
        <Info_Home/>
        <Footer/>
      </div>
    );
  }
}//end Home

export default Home;