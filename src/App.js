import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import Shop from './shops/shop.component';
import Header from './components/header/header';
import Signinup from './pages/sign-in-up/sign-in-up';
import {auth , MakeProfileOfUser} from './firebase/firebase.utils';

class  App extends React.Component{
      constructor()
      {
        super();

        this.state={
          currentuser:null
      };
      }
      authunsubscribe=null;
      componentDidMount()
      {
        this.authunsubscribe=auth.onAuthStateChanged(async authuser=>{
         if(authuser){
          const userRef= await MakeProfileOfUser(authuser);
           userRef.onSnapshot(snapshot=>{
          this.setState({
            currentuser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });
          });

         }
         this.setState({currentuser:authuser});
      });
      }
      componentWillUnmount(){
        this.authunsubscribe();
      }

  render(){
  return (
    <div>
      <Header currentuser={this.state.currentuser}/>
      <switch>
      <Route exact  path ='/' component={HomePage}/>

      <Route  path ='/shops' component={Shop}/>
      <Route path='/signin' component={Signinup}/>
      </switch>
</div>
  );

    
  }
}

export default App;
