import React from 'react';

import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth ,MakeProfileOfUser} from '../../firebase/firebase.utils';

class Signup extends React.Component{
constructor(){
    super();

    this.state={
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
};   
}

HandleChange=async event=>{
    event.preventDefault();
    const {displayName,email,password,confirmpassword}=this.state;
    if(password !== confirmpassword){
        console.log(password);
alert('password does not match');
return;
    }


    try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password,
        );
  console.log(displayName);
        await MakeProfileOfUser(user, { displayName });
  
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    

}
HandleOnChange= async event=>{
    const { name, value } = event.target;

    this.setState({ [name]: value });
}

render()
{  
    const {displayName,email,password,confirmpassword}=this.state;

    return(
<div className='sign-up'>
    <h1 >SIGN UP</h1>
 
<form  onSubmit={this.HandleChange}>
    <FormInput 
    type='text' 
    name='displayName' 
    value={displayName} 
    onChange={this.HandleOnChange}
    label='Name' 
    required />

    <FormInput 
    
    name='email' 
    value={email}
    onChange={this.HandleOnChange} 
    label='Email'  type='email'
    required />

    <FormInput 
    type='password' 
    name='password' 
    value={password} 
    onChange={this.HandleOnChange}
    label='Password' 
    required />

    <FormInput 
    type='password' 
    name='confirmpassword' 
    value={confirmpassword} 
    onChange={this.HandleOnChange}
    label='Confirm Password' 
    required />
     
     <CustomButton type='submit'>Sign Up</CustomButton>
</form>

    
</div>

    )
}

}
export default Signup;