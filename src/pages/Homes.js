import React from 'react';
//import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
//import { faEdit} from '@fortawesome/free-solid-svg-icons'


function Homes() {
	
	return (
	<div>
<div className="aside_main">	
<div className="Aside1_container">
    	<div className="side_content">
			<div className="row">
				<div className="col-6 col-sm-2">
            	<h5 className="courses">Courses(3)</h5>	
				</div>
				<div className="col-6 col-sm-2">
            	<button className="submit"id="blue">New Course</button>
				</div>
				<div className="col-4 col-sm-2">
            	<div className="following_container">
            		<p className="following_text">Following</p>
            		<a href="javascript"className="avatar rounded-circle">
			<img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" alt="img"/></a>
			<a href="javascript"className="avatar rounded-circle">
			<img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png"  alt="img"/></a>
            	</div>
				</div>
				<div className="col-4 col-sm-2">
            	<div className="followers_container">
            		<p className="follower_text">Follower</p>
            		<a href="javascript"className="avatar rounded-circle">
			<img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" alt="img"/></a>
			<a href="javascript"className="avatar rounded-circle">
			<img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" alt="img"/></a>
            	</div>
				</div>
				<div className="col-4 col-sm-2">
            	<button className="submit"><FontAwesomeIcon icon={faVideo} />GO Live</button>
    	</div>
		</div>
		</div>
		  </div>  
		  
		
                
                <input name="text"  className="input-control1" placeholder="Filtered Search" /><FontAwesomeIcon icon={faVideo} />
         
           




		  <table className="table">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Sales</th>
      <th scope="col">Enrollment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" className="t_img" alt="img"/></th>
      <td>Course 1</td>
      <td>120 000</td>
      <td>3000</td>
    </tr>
    <tr>
      <th scope="row"><img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" className="t_img" alt="img"/></th>
      <td>Course 2</td>
      <td>2000</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row"><img src="https://res.cloudinary.com/cmp84378/image/upload/v1612559310/Image_Shape_10_exjn1z.png" className="t_img" alt="img"/></th>
      <td>courses 3</td>
      <td>15000</td>
      <td>4000</td>
    </tr>
  </tbody>
</table>


</div>
</div>


		);
}

export default Homes;