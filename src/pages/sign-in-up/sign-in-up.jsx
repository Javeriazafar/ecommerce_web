import React from 'react';
import Signin from '../../components/sign-in/sign-in';
// import Signup from '../../components/sign-up/sign-up';
import './sign-in-up.scss';
import Signup from '../../components/sign-up/sign-up';
const Signinup=()=>(
<div className='sign-in-and-sign-up '><Signin/>

<Signup/>
</div>


);

export default Signinup;