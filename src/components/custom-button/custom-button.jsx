import React from'react';

import './custom-button.scss';

const CustomButton =({children,isGoogleSignin,invert,...otherprops})=>
(

<button className={`${invert?'invert':''}  ${isGoogleSignin?'google-sign-in':''} custom-button`}
 {...otherprops}>{children}</button>


);
export default CustomButton;