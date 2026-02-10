import React, { useContext }  from "react";
import { AboutMeContainer, CallToActionButtons, ProfilePicture, SocailLink } from "./AboutMe.Styles";
import { AppContext } from "../AppWrapper/AppWrapper";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import {SOCIAL_LINKS} from "./aboutMe.utils";

const AboutMe = () => {
  const {languageTexts, theme} = useContext(AppContext)!;

  return (
    <AboutMeContainer>
      <div>
        <ProfilePicture>
          {SOCIAL_LINKS.map(({href,icon,backgroundColor},index)=>(
        <SocailLink 
        key={index} 
        target="blank" 
        href={href} 
        $backgroundColor={backgroundColor}
        className={`socialLink_${index}`}>
          {icon}
        </SocailLink>))}
        <img src="/profile-pic.jpg" alt="Profile Picture" />
        </ProfilePicture>
      </div>
      <div className="name">{languageTexts.aboutMe.name}</div>
      <div className="title">{languageTexts.aboutMe.title}</div>
      <div className="summary">
        {languageTexts.aboutMe.description}
      </div>
      <div> 
        <CallToActionButtons>
          <a target="_blank" href="Resume.pdf">
            <button onClick={()=>null}>{languageTexts.aboutMe.downloadResume}</button>
          </a>
          <a href="mailto:2e4i990@gmail.com" className="icon">
            <HiOutlineMail size={"1.5vw"} color={theme.primaryColor}/>
          </a>
          <a href="https://wa.me/01126609765" className="icon" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={"1.5vw"} color={theme.primaryColor}/>
          </a>
        </CallToActionButtons>
      </div>
    </AboutMeContainer>
  );
}

export default AboutMe;