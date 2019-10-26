import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, Signinwithgoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

class Signin extends React.Component{
constructor(props)
{
    super(props);

    this.state={
        email:'',
        password:''
            };
}
    changeHandle=async (event)=>{
        event.preventDefault();
        const {email,password}=this.state;
    try{
    await auth.signInWithEmailAndPassword(email,password);
console.log(email,password);
        this.setState({email:'',password:''});
    }
    catch(error){
    console.log(error);
}};



    onHandleData=(event)=>{
    const {value,name}=event.target;
    this.setState({[name]:value});

};

render()
{
return (

    <div className='sign-in'>
        <h2 className='title'>SIGN IN</h2>
        <form  onSubmit={this.changeHandle}>
            <FormInput 
            name='email' 
            type='email'
            value={this.state.email} 
            handleChange={this.onHandleData} 
            label='Email' required/>

            <FormInput 
            name='password' 
            type='password'
            value={this.state.password} 
           handleChange={this.onHandleData}
            label='Password' required/>
            <div className='buttons'>

            <CustomButton type='submit' >Sign In</CustomButton>
            <CustomButton onClick={Signinwithgoogle} isGoogleSignin>{''}Sign In With Google{''}</CustomButton>
            </div>
        </form>

    </div>
);

}

}
export default Signin;