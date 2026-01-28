import React, { useContext }  from "react";
import { AboutMeContainer } from "./AboutMe.Styles";
import { AppContext } from "../AppWrapper/AppWrapper";
const AboutMe = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { languageTexts } = context;
  return <AboutMeContainer>
    <div className="name">{languageTexts.aboutMe.name}</div>
    <div className="title">{languageTexts.aboutMe.title}</div>
    <div className="summary">
      {languageTexts.aboutMe.description}
    </div>
  </AboutMeContainer>;
}
export default AboutMe;
