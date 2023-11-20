import React from 'react';
import {Link} from "react-router-dom";

function Auth(props) {
    return (
  <>
    <Link to={'/profile'}>profile</Link>
    <Link to={'/'}>home</Link>
  </>

    );
}

export default Auth;