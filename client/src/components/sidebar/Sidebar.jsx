import React, { useState } from 'react';
import { Button} from "react-bootstrap";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useSelector, useDispatch } from "react-redux";
import { logoutTeacher } from "../../Redux/actions/teacherActions";
import './sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const teacher = useSelector((state) => state.TeacherReducer.teacher);
  const dispatch = useDispatch();
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
          <Button variant="secondary" style={{marginRight:"10px",marginTop:"4px"}}>
                <Link
                    to="/login-teacher"
                    onClick={() => dispatch(logoutTeacher())}
                    style={{ color:"white", textDecoration:"none", }}
                >
                    LOGOUT
                </Link>
        </Button>
        
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
