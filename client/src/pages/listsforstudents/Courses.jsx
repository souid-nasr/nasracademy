import React, { useEffect } from "react";
import {Link}from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from "react-redux";
import { allCourses } from '../../Redux/actions/courseActions';
import NavbarStudent from '../../components/navbar/NavbarStudent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:10,
  },
  media: {
    height: 140,
  },
});


const Courses = (props) => {
  const classes = useStyles();
  const CourseErrors = useSelector((state) => state.CourseReducer.errors);


  const dispatch = useDispatch();

  const getCoursesList = () => dispatch(allCourses());
  const data = useSelector(
    (state) => state.CourseReducer.data
  );
  console.log(data)

  useEffect(() => {
    getCoursesList();
  }, []);

  

  return (
    <>
    <NavbarStudent/>
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch"}}>
    {data.map((el)=>(
    <Card className={classes.root}key={el._id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={el.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {el.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {el.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <spam Fontsize="5px" color="textSecondary">
          Author: {el.creator}
        </spam>
        <Button size="small" color="primary" >
          <Link to={{pathname:"/student/watch",el:el}} style={{textDecoration:"none"}}>
          Learn More
           </Link>
        </Button>
      </CardActions>

    </Card>
    ))}
    </div>
  </>
  );
}
export default Courses