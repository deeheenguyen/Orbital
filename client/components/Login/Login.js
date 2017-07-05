import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{
  responseFacebook(response) {
     console.log(response);
   }

   render() {
     return (
       <div>
        <p>
                    FacebookLogin
        </p>
       </div>
     )
   }


}

export default Login;
