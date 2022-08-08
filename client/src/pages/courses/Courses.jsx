import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import Button from '@material-ui/core/Button';
import './courses.scss'
import {Card}from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { allCourses } from '../../Redux/actions/courseActions';
// import Footer from "../../components/footer/Footer"


const OurCourses = () => {

    const data = useSelector(
        (state) => state.CourseReducer.data
      );
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(allCourses())
  };
    return (
<div className="courses">
    <Navbar/>
            <Button variant="primary" style={{fontSize:"50px"}} onClick={handleClick}>our Courses</Button>
            <hr/>
            <div style={{display:"flex", flexWarp:"warp"}}>
            {data.map((el)=>(
                    <Card style={{ width: '18rem' ,marginRight:"20px" }}key={el._id}>
                        <Card.Img variant="top" src={el.img} />
                        <Card.Body>
                            <Card.Title style={{color:"blue"}}>{el.title}</Card.Title>
                            <hr/>
                            <Card.Text>{el.desc}</Card.Text>
                            <hr/>
                            <Card.Text style={{color:"blue"}}>
                                Created by Mrs/Mr. <spam style={{fontSize:"18px",fontWight:"5px"}}>{el.creator}</spam>
                            </Card.Text>
                        </Card.Body>
                    </Card>

            ) )}
            </div>
        </div>
    );
}

export default OurCourses;