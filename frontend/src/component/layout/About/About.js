import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/shashank__27/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dcee89dhw/image/upload/v1671106494/ProfilePic/profile-pic_bgqilj.jpg"
              alt="Founder"
            />
            <Typography>Shashank Saurav</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is an Ecommerce wesbite made by @shashank. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow us</Typography>
            <a
              href="https://github.com/sauravshashank2001"
              target="blank"
            >
              <GitHubIcon className="gitHubIcon" />
            </a>

            <a href="https://www.instagram.com/shashank__27/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;