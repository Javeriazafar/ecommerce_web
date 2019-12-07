import React from 'react';
import './header.scss';
import {Link } from 'react-router-dom';
 import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth } from '../../firebase/firebase.utils';
import {connect } from 'react-redux';

import Carticon from '../cart-icon/cart-icon';
import Cartdropdown from '../cart-dropdown/cart-dropdown';
import { selectUser } from '../../redux/user/user.selector';
import {  selectCarthidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector} from 'reselect';
 const Header=({currentuser,hidden})=>
 (
     <div className='header'>
<Link className='logo-container' to='/' >
    <Logo className='logo'/>
</Link>
<div className='options'>
<Link className='option' to='/shops'>SHOPS</Link>
<Link className='option' to='/contact'>CONTACT</Link>
{currentuser?(<div className='option'  onClick={()=>auth.signOut()}>
SIGN OUT    
</div>)
:(
<Link className='option' to='/signin' >SIGN IN</Link>)
}

<Carticon/>

</div>
{ hidden?null:
<Cartdropdown/>
}

     </div>

 );
 const mapStateToProps= createStructuredSelector({
currentuser : selectUser,
hidden: selectCarthidden
 });




 export default connect(mapStateToProps)(Header);