import React,{ Component}from 'react';
import {
 Links
} from './WelcomeElement';

import './index.css';

class Welcome extends Component{

  state={
  name:""

}
handleChange = (e) => {
  this.setState({
    [e.target.id]:e.target.value
  })
}
handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
}

render(){

	return(
       <div>
       
       <div className="main_body">
              
            <div className="first_header">
                 <div className="first_header_items">
                <h1 className="first_header_text">
                    Lorem lpsum dolor sit <br />amet,consectetur.
                </h1>
                <p className ="first_header_text2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet
 </p>
                 <div className="Form">
                 <form onSubmit={this.handleSubmit}>  
                <input type="text" name="text" className="input-control" placeholder="Enter Your Email Adress" id="name" 
                 onChange={e => this.name = e.target.value}/>
                 <button type="submit" className="btn btn"id="but">Button</button>
                 </form>
            </div>
            </div>
         </div>

         <div className="row">
            <div className="col-12 col-sm-6">
            <div className="video_container">
   <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611149722/Image_Shape_7_tyjebd.png" className="img1" alt="img"/>
   <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611226170/play_arrow_24px_urjjct.png" className="img2" alt="img"/>

      </div></div>
       <div className="col-12 col-sm-6">
        <div className="video_card_text">
         <div className="image_card">
               <h1 className="first_header_text2"> Lorem lpsum dolor sit amet,consectetur.</h1>
                <p className = "first_header_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet. </p>
                 
               <button type="submit" className="btn btn"id="but2">Start Now</button>
             </div>
         </div>
        </div>
     </div>
         <div className="row">

         <div className="col-12 col-sm-6">
            <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611146287/Image_Shape_1_hvjyim.png"  className="imge"alt="img"/>
  </div>
       <div className="col-12 col-sm-6">
        <div className="video_card_text1">
         <div className="image_card">
               <h1 className="first_header_text2"> Lorem lpsum dolor sit amet,consectetur.</h1>
                <p className = "first_header_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet. </p>
                
               <button type="submit" className="btn btn"id="but2">Start Now</button>
             </div>
         </div>
        </div>
     </div>
        <div className="three_steps">
             <h1 className="three_steps_text">Three Steps,and<br/>you are done</h1>
       <div className="row">
           <div className="col-sm-4 col-12">
            <h3 className="step1_text">Step1</h3>
              <p className = "first_header_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet. </p>
           </div>
           <div className="col-sm-4 col-12">
             <h3 className="step1_text">Step2</h3> 
              <p className = "first_header_text2">welcome welcome welcome welcome welcome welcome welcome welcome welcome welcome <br/>welcome welcome welcome welcome welcome welcome welcome welcome<br/>welcome</p> 
           </div>
           <div className="col-sm-4 col-12">
            <h3 className="step1_text">Step3</h3>
             <p className = "first_header_text2">welcome welcome welcome welcome welcome welcome welcome welcome welcome welcome <br/>elcome welcome welcome welcome welcome welcome welcome welcome<br/>welcome welcome welcome welcome welcome welcome welcome</p>
               
           </div>
       </div>


        </div>
     <div className="testimonial_container">
     <h1 className="testimonial">Testimonial</h1>
     <div className="row">
     
      <div className ="col-12 col-sm-6">
      <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611146300/Image_Shape_2_qu28xd.png" className="testimonial_img" alt="img"/>
      </div>
        <div className ="col-12 col-sm-6">
        <div className ="Testimonial_text_container">
        <h1 className="Testimonial_text1">Testimonial</h1>
         <p className = "Testimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet. </p>
          <p className = "Testimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet.<br /><b/>Favour Nzube<b/> </p>
</div>

      </div>

     </div>
     </div>

     <div className="Features">
  
         <h1 className="Features_text">
            Featured Course
         </h1>
         <h1 className="course">Course <br/>Name</h1>
         <p className="instructor">instructors Name</p>
        <button type="submit" className="btn btn"id="but3">View Course</button>
     </div>

<div className="suggested_container">
    <h1 className="suggested_test">
        Suggested Courses
    </h1>
    <div className="row">
        <div className="col-sm-4 col-12 ">
            <h3 className="coursename_text">
                Course name to be stated here
            </h3>
            <p className="instructor_text">
                instructors name
            </p>
            <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611146310/Image_Shape_3_jycz2n.png" alt="images"/>
                 <p className = "first_header_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet.</p>  
            <button type="submit" className="btn btn"id="but4">View Course</button>
        </div>
          <div className="col-sm-4 col-12 ">
              <h3 className="coursename_text">
                Course name to be stated here
            </h3>
            <p className="instructor_text">
                instructors name
            </p>
            <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611146321/Image_Shape_4_gwapjc.png" alt="images"/>
                 <p className = "first_header_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet.</p>  
            <button type="submit" className="btn btn"id="but4">View Course</button>
        </div>
  <div className="col-sm-4 col-12 ">
              <h3 className="coursename_text">
                Course name to be stated here
            </h3>
            <p className="instructor_text">
                instructors name
            </p>
            <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611146331/Image_Shape_5_qmdush.png" alt="images"/>
                 <p className = "first_header_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> pulvinar ultricies.Donec lobortis nisl dimentum, sed faucibus libero <br/>imperdiet.</p>  
            <button type="submit" className="btn btn"id="but4">View Course</button>
        </div>

    </div>
</div>
         <div className="quickstart_container">
             <div className="row">
                 <div className="col-4 sm-6">
                     <h3 className="quickstart_text"> Get A QuickStart<br /> Guide On How To <br />Use Our Platform</h3>
                     <button type="submit" className="btn btn"id="but5">Check it out</button>
                 </div>
                   <div className="col-8 sm-6">
           <img src=" https://res.cloudinary.com/cmp84378/image/upload/v1611156182/Image_Shape_8_uxeetf.png"className="guide_img" alt="img"/>       
           <img src="https://res.cloudinary.com/cmp84378/image/upload/v1611226170/play_arrow_24px_urjjct.png" className="img3" alt="img"/>
  
                 </div>
             </div>
         </div>

       <div className="contact_container">
           <div className="row">
               <div className="col-6 sm-6">
                   <img src=" https://res.cloudinary.com/cmp84378/image/upload/v1611146342/Image_Shape_6_pgocql.png"className="contact_img" alt="img"/>
               </div>
                <div className="col-6 sm-6">
                 <h1 className="contact_text">Contact <br/>Us to let us<br/> take you <br/>through</h1>
                <button type="submit" className="btn btn"id="but6">Contact Us</button> 
               </div>
           </div>
       </div>
         

         <div className="signup">
             <h2 className="signup_text">Signup lets <br />democratize Education<br /> together</h2>
          <Links to="/signin"><button type="submit" className="btn btn"id="but7">Sign Up</button></Links>
         </div>
          
</div>
</div>





       
       
		);
};
};
export default Welcome;