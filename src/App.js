import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import Shop from './shops/shop.component';
import Header from './components/header/header';
import Signinup from './pages/sign-in-up/sign-in-up';
import {auth , MakeProfileOfUser} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
class  App extends React.Component{
 
      authunsubscribe=null;
      componentDidMount()
      {
        const {setCurrentUser}=this.props;
        this.authunsubscribe=auth.onAuthStateChanged(async authuser=>{
         if(authuser){
          const userRef= await MakeProfileOfUser(authuser);
           userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            
              id:snapshot.id,
              ...snapshot.data()
            
          });
          });

         }
         setCurrentUser( authuser);
      });
      }
      componentWillUnmount(){
        this.authunsubscribe();
      }

  render(){
  return (
    <div>
      <Header />
      <switch>
      <Route exact  path ='/' component={HomePage}/>

      <Route  path ='/shops' component={Shop}/>
      <Route path='/signin' component={Signinup}/>
      </switch>
</div>
  );

    
  }
}

const mapDispatchToProps=(dispatch)=>({
setCurrentUser:user=> dispatch(setCurrentUser(user))

})




export default connect(null,mapDispatchToProps)(App);
