
import React, {useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from "react-redux";
import { allProjects } from '../../Redux/actions/projectActions';
import NavbarStudent from '../../components/navbar/NavbarStudent';
import {Link}from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Projects() {
  const ProjectErrors = useSelector((state) => state.ProjectReducer.errors);


  const dispatch = useDispatch();

  const getProjectsList = () => dispatch(allProjects());
  const data = useSelector(
    (state) => state.ProjectReducer.data
  );
  console.log(data)

  useEffect(() => {
    getProjectsList();
  }, []);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    <NavbarStudent/>
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch"}} >
    {data.map((el) => (
    <Card className={classes.root}key={el._id}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {el.about}
        </Typography>
        <Typography variant="h5" component="h2">
          {el.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Author:{el.creator}
        </Typography>
        <Typography variant="body2" component="p">
          {el.desc}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={{pathname:"/student/submitProject"}} style={{textDecoration:"none"}}>
          Add Project
           </Link>
        </Button>
      </CardActions>
    </Card>
    ))}
    </div>
    </>
  )
}
