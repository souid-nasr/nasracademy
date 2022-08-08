import {useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutStudent } from "../../Redux/actions/studentActions";
import { Button} from "react-bootstrap";

import $ from 'jquery';

const NavbarStudent = () => {
  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 50);
    });
    
  }, []);
  const student = useSelector((state) => state.StudentReducer.student);
  const dispatch = useDispatch();
  return (
   <nav className="navbar navbar-expand-lg navbar-mainbg">
            <img className="navbar-brand navbar-logo"
          src="/logo.png"
          alt=""
        />
   <button 
     className="navbar-toggler"
     onClick={ function(){
       setTimeout(function(){ animation(); });
     }}
     type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i className="fas fa-bars text-white"></i>
   </button>
   <div 
     className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ml-auto">
         
         <div className="hori-selector">
           <div className="left"></div>
           <div className="right"></div>
         </div>
         <li className="nav-item">
           <Link className="nav-link" to="/">
             <i 
             className="far fa-address-book">
             </i>HOME
           </Link> 
         </li>
         <li className="nav-item active">
           <Link to="/auth-student" className="nav-link">
          <span className="fas fa-tachometer-alt">MY PROFILE</span>
        </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/student/courses">
             <i 
             className="far fa-address-book">
             </i>COURSES
           </Link> 
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/student/projects">
             <i 
             className="far fa-copy">
             </i>PROJECTS
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/student/quiz">
             <i 
             className="far fa-copy">
             </i>QUIZ
           </Link>
         </li>

         <li className="nav-item">
           <Link className="nav-link" to="/student/students">
             <i 
             className="far fa-copy">
             </i>STUDENTS
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/student/contact">
             <i 
             className="far fa-copy">
             </i>CONTACT
           </Link>
         </li>
     </ul>
   </div>
  <Button variant="secondary" style={{marginRight:"10px",marginTop:"4px"}}>
                <Link
                    to="/"
                    onClick={() => dispatch(logoutStudent())}
                    style={{ color:"white", textDecoration:"none", }}
                >
                    LOGOUT
                </Link>
  </Button>
</nav>
);
};

export default NavbarStudent;