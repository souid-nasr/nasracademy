import {useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import HomeTeacher from '../../pages/home/HomeTeacher'
import HomeStudent from '../../pages/home/HomeStudent'

const Navbar = () => {
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
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);
  const TeacherIsAuthenticated = useSelector((state) => state.TeacherReducer.isAuthTeacher);
  const StudentIsAuthenticated = useSelector((state) => state.StudentReducer.isAuthStudent);
  return (
    <>
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
           <div className="right"></div>
         </div>
         
         <li className="nav-item active">
           <Link to="/" className="nav-link">
          <span className="fas fa-tachometer-alt">HOME</span>
        </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/elearnining">
             <i 
             className="far fa-chart-bar">
             </i>E-LEARNING
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/resources">
             <spam 
             className="far fa-clone">
             </spam>RESOURCES
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/contact">
             <i 
             className="far fa-copy">
             </i>CONTACT
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/register-teacher">
             <i 
             className="far fa-copy">
             </i>TEACHER SPACE
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/register-student">
             <i 
             className="far fa-copy">
             </i>STUDENT SPACE
           </Link>
         </li>
     </ul>
   </div>
</nav>
</>
);
};

export default Navbar;