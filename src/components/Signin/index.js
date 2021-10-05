
import React, {Component } from 'react';
import {
	Icon,

  NavBtnLink,
  NavBtn,
  Login,
  
} from './SigninElements';
import './signin.css';
 
const initialState = {
  name:"",
  email:"",
  Password:"",
  nameError:"",
  emailError:"",
  PasswordError:""
}

class Signin extends Component {
state= initialState;



handleChange = (e) => {
  const isCheckbox = e.target.type ==="checkbox";

  this.setState({
    [e.target.name ]: isCheckbox
    ?e.target.checked
    :e.target.value
  });
};
validate =()=>{
  let nameError:"";
 let emailError:"";
//let PasswordError:"";
 if (!this.state.name){
  nameError ="name cannot be blank";
 }



 if (!this.state.email.includes('@')){
   emailError = "Invalid email";
 }

 if (emailError|| nameError ){
  this.setState({ emailError,nameError });
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
   
  
       <Icon to ="/"><img src ="https://res.cloudinary.com/cmp84378/image/upload/v1611468513/Logo_mbswgk.png" className="signup_logo" alt="img"/></Icon>
         <NavBtn>
     <NavBtnLink to='/Login'>Login</NavBtnLink>
       </NavBtn>
       <div className ="form">
     <form onSubmit={this.handleSubmit}>   
      <div className="form_contain">    
    
     <div className="ready_container">
     
      <h1 className ="signin_text">Ready to own your School?</h1>
  
</div>
    
  <div className="input_Container">
      <div className = "col-sm-12 col-12">
       <input name="name"   placeholder="name" value={this.state.name} id="name" onChange={this.handleChange} />
      <div style = {{ fontSize:12,color:"red"}}>
      {this.state.nameError}
      </div>
  
      </div>
        <div className = "col-sm-12 col-12">
       <input name="email"  id="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
        <div style = {{ fontSize:12, color:"red"}}>
        {this.state.emailError}
      </div>
      
      </div>
        <div className = "col-sm-12 col-12">  
       <input type="Password" name="Password" placeholder="Password" value={this.state.Password} id="Password" onChange={this.handleChange} />
      <div style = {{ fontSize:12, color:"red"}}>
      {this.state.PasswordError}</div>
      
      </div>
       <div className="forget">Forgot Password?</div>
       <button type="submit" className="btn btn"id="started">Get Started</button>
       <p className="already">Already have an account <Login to='/Login'>Login</Login></p>
      </div>
      </div>
      </form>
</div>

      

      </>

		);
};
};
export default Signin;