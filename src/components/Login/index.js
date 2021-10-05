
import React, {Component } from 'react'
import {
	Icon,
  NavBtnLink,
  NavBtn,
  Signin
} from './LoginElement';
import './Login.css';
/*
const register =()=>{
  Axios.post(http://local:3001/register/" ,{
    email: emailReg,
    Password: passwordReg,
  }).then((response) => {
    console.log(response);
  });
  
};
*/
const initialState = {

  email:"",
  Password:"",
  
  emailError:"",
  PasswordError:""
}
/*
 const Login = () => {
   Axios.post"http://loaclhost:3001/Login",{
    email: emeail,
    password:pzssword,
  }).then((response) =>
   console.log(response);
   if (!response.data.auth){
     setLoginStatus(false);
   }else{
     console.log(response.data);
     setLoginStatus(true);
   };
   )

   };
 };
 */
class Login extends Component {

state = initialState;



handleChange = (e) => {
  const isCheckbox = e.target.type ==="checkbox";

  this.setState({
    [e.target.name ]: isCheckbox
    ?e.target.checked
    :e.target.value
  });
};
validate =()=>{
  
 let emailError:"";
//let PasswordError:"";
 



 if (!this.state.email.includes('@')){
   emailError = "Invalid email";
 }

 if (emailError){
  this.setState({ emailError });
  return false;
 }

 return true;
};

handleSubmit = (e) =>{
  e.preventDefault();
  const isValid = this.validate();
  if (isValid){
     console.log(this.state);

 //clear form
this.setState(initialState);
  }
};

//const Signin = () =>{
render(){
	return( 
      <>
   
  
       <Icon to ="/"><img src ="https://res.cloudinary.com/cmp84378/image/upload/v1611468513/Logo_mbswgk.png" className="signup_logo"alt="img"/></Icon>
         <NavBtn>
     <NavBtnLink to='/signin'>Sign Up</NavBtnLink>
       </NavBtn>
       <div className ="form">
     <form onSubmit={this.handleSubmit}>   
      <div className="form_contain">    
    
     <div className="ready_container">
     
      <h1 className ="signin_text">Good to have you back!</h1>
  
</div>
    
  <div className="input_Container">
        <h4 className="missed">Your School Missed You</h4>
        <div className = "col-sm-12 col-12">
       <input type="email" name="email"  placeholder="email" id="email" 
       onChange={this.handleChange} />
        <div style = {{ fontSize:12, color:"red"}}>
        {this.state.emailError}
        </div>
      </div>
        <div className = "col-sm-12 col-12">  
       <input type="Password" name="Password" placeholder="Password" id="Password" 
       onChange={this.handleChange} />
        <div style = {{ fontSize:12, color:"red"}}>
        {this.state.PasswordError}
      </div>
      </div>
       <div className="forget">Forgot Password?</div>
        <button type="submit" className="btn btn"id="started">Login</button>
       <p className="already">Not yet a School Owner? <Signin to='/signin'className="color">Sign Up Now!</Signin></p>
      </div>
      </div>
      </form>
</div>

      

      </>

		);
};
};
export default Login;