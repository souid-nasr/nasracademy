import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from "react-icons/hi"
import * as GoIcons from "react-icons/go"
import * as VscIcons from "react-icons/vsc"

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: "/auth-teacher",
    icon: <GoIcons.GoPerson/>,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: "/teacher/studentsList",
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: "/teacher/CoursesList",
    icon: <HiIcons.HiBookOpen />,
    cName: 'nav-text'
  },
  {
    title: 'New Course',
    path: "/teacher/newCourse",
    icon: <VscIcons.VscNewFolder />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: "/teacher/projectsList",
    icon: <AiIcons.AiOutlineProject />,
    cName: 'nav-text'
  },
  {
    title: 'Answers',
    path: "/teacher/answersList",
    icon: <RiIcons.RiQuestionAnswerFill />,
    cName: 'nav-text'
  },
  {
    title: 'New Project',
    path: "/teacher/newProject",
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: "/teacher/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Quiz',
    path: '/teacher/quiz',
    icon: <AiIcons.AiOutlineQuestionCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/resources',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
