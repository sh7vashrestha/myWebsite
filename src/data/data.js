import Tictactoe from "../assets/projects/tictactoe.jpg";
import mausam from "../assets/projects/mausam.jpg";
import crypker from "../assets/projects/crypker.jpg";
import textmanipulator from "../assets/projects/textmanipulator.jpg";
import AIRLINE from "../assets/projects/AIRLINE.jpg";
import robosoccer from "../assets/projects/robosoccer.jpg";
import smartaccesssystem from "../assets/projects/smartaccesssystem.png";
import linerobo from "../assets/projects/linerobo.jpg";
import roboarm from "../assets/projects/roboarm.jpg";
import logo1 from "../assets/projects/Graphic Designs/Badges/1.png";
import logo2 from "../assets/projects/Graphic Designs/Badges/2.png";
import logo3 from "../assets/projects/Graphic Designs/Badges/3.png";
import logo4 from "../assets/projects/Graphic Designs/Badges/4.png";
import logo5 from "../assets/projects/Graphic Designs/Badges/6.png";
import logo6 from "../assets/projects/Graphic Designs/Badges/7.png";
import logo7 from "../assets/projects/Graphic Designs/Badges/8.png";
import app1 from "../assets/projects/Graphic Designs/application/1.png";
import app2 from "../assets/projects/Graphic Designs/application/2.png";
import app3 from "../assets/projects/Graphic Designs/application/3.png";
import app4 from "../assets/projects/Graphic Designs/application/4.jpg";
import festival1 from "../assets/projects/Graphic Designs/festival/Dashain.jpg";
import festival2 from "../assets/projects/Graphic Designs/festival/MahaShivaRatri.png";
import festival3 from "../assets/projects/Graphic Designs/festival/Newyear.jpg";
import festival4 from "../assets/projects/Graphic Designs/festival/tihar.jpg";
import event1 from "../assets/projects/Graphic Designs/banners/battle.png";
import event2 from "../assets/projects/Graphic Designs/banners/battleforspeed.jpg";
import event3 from "../assets/projects/Graphic Designs/banners/rookies.png";
import event4 from "../assets/projects/Graphic Designs/banners/welcome.jpg";

export const projects = {
  webData: [
    {
      id: 1,
      name: "Weather Forecast",
      des: "React, HTML, SASS",
      image: mausam,
      github: "https://github.com/sh7vashrestha/Mausam",
      live: "https://sh7vashrestha.github.io/Mausam/",
    },
    {
      id: 2,
      name: "Cryptocurrency Tracker",
      des: "React, HTML, SASS",
      image: crypker,
      github: "https://github.com/sh7vashrestha/Crypker",
      live: "https://sh7vashrestha.github.io/Crypker/",
    },
    {
      id: 3,
      name: "Airline Management System",
      des: "NodeJS, HTML, CSS, MySQL",
      image: AIRLINE,
      github: "https://github.com/sh7vashrestha/AirlineManagementSystem",
      live: "",
    },
    {
      id: 4,
      name: "Text Manipulator",
      des: "ReactJS, HTML, CSS",
      image: textmanipulator,
      github:
        "https://github.com/sh7vashrestha/Text-Manipulator/settings/pages",
      live: "https://sh7vashrestha.github.io/Text-Manipulator/",
    },
    {
      id: 5,
      name: "TIC-TAC-TOE",
      des: "HTML, CSS, Vanilla JS",
      image: Tictactoe,
      github: "https://github.com/sh7vashrestha/TICTACTOE",
      live: "",
    },
  ],
  hardwareData: [
    {
      id: 1,
      name: "Robotic Arm",
      des: "Arduino, OpenCV",
      image: roboarm,
      github: "https://github.com/WRCRoboticsClub/robotics-arm",
      live: "",
    },
    {
      id: 2,
      name: "RoboSoccer",
      des: "Arduino",
      image: robosoccer,
      github: "https://github.com/sh7vashrestha/ROBOSOCCER",
      live: "",
    },
    {
      id: 3,
      name: "Line-Following-Bot",
      des: "Arduino",
      image: linerobo,
      github: "https://github.com/sh7vashrestha/LineFollowingRobot",
      live: "",
    },
    {
      id: 3,
      name: "Smart Door Access System",
      des: "Arduino, Flutter",
      image: smartaccesssystem,
      github: "https://github.com/sh7vashrestha/SmartAccessSystem",
      live: "",
    },
  ],
  graphicData: [
    {
      id: 1,
      name: "Event Banners",
      des: "Simple banners for the events",
      image: [event1, event2, event3, event4],
    },
    {
      id: 2,
      name: "Festival Banners",
      des: "Simple banners for the festival wishes",
      image: [festival2, festival1, festival3, festival4],
    },
    {
      id: 3,
      name: "Badges",
      des: "Simple Badges",
      image: [logo1, logo5, logo3,logo7, logo4, logo6, logo2],
    },
    {
      id: 3,
      name: "Application UI",
      des: "Some of application UI in figma",
      image: [app1, app2, app3, app4],
    },
  ],
};
