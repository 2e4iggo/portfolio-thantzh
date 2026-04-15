"use client";

import React from "react";
import {
  EducationContainer,
  PageHeader,
  Timeline,
  EducationCard,
  EducationContent,
  EducationHeader,
  DegreeTitle,
  InstitutionInfo,
  Institution,
  Duration,
  HighlightsList,
  HighlightItem,
  DegreeBadge,
  SummarySection,
} from "./education.styles";

const Education = () => {
  return (
    <EducationContainer>
      <div className="content-wrapper">
        <PageHeader>
          <h1>Education</h1>
          <p className="subtitle">Academic Foundation & Professional Training</p>
        </PageHeader>

        <Timeline>
          {/* BSc (Hons) */}
          <EducationCard $delay={0.2}>
            <EducationContent>
              <EducationHeader>
                <DegreeTitle>
                  <span className="degree-icon">🎓</span>
                  BSc (Hons) in Business Information Technology
                </DegreeTitle>
                <InstitutionInfo>
                  <Institution>University of Greenwich (UK)</Institution>
                  <Duration>2016 – 2018</Duration>
                </InstitutionInfo>
                <DegreeBadge>🏆 Honours Degree</DegreeBadge>
              </EducationHeader>

              <HighlightsList>
                <HighlightItem>
                  <span>Focused on enterprise systems, database management, and business-IT alignment.</span>
                </HighlightItem>
                <HighlightItem>
                  <span>Developed a strong foundation in translating business requirements into technical solutions.</span>
                </HighlightItem>
              </HighlightsList>
            </EducationContent>
          </EducationCard>

          {/* HND */}
          <EducationCard $delay={0.4}>
            <EducationContent>
              <EducationHeader>
                <DegreeTitle>
                  <span className="degree-icon">📚</span>
                  Higher National Diploma (HND) in Computing
                </DegreeTitle>
                <InstitutionInfo>
                  <Institution>SQA – Scottish Qualifications Authority</Institution>
                  <Duration>2014 – 2016</Duration>
                </InstitutionInfo>
                <DegreeBadge>💻 Technical Diploma</DegreeBadge>
              </EducationHeader>

              <HighlightsList>
                <HighlightItem>
                  <span>Concentrated on software development fundamentals, data structures, and systems analysis.</span>
                </HighlightItem>
              </HighlightsList>
            </EducationContent>
          </EducationCard>

          {/* Military Training */}
          <EducationCard $delay={0.6}>
            <EducationContent>
              <EducationHeader>
                <DegreeTitle>
                  <span className="degree-icon">⚕️</span>
                  Professional Medical & Military Training
                </DegreeTitle>
                <InstitutionInfo>
                  <Institution>Military Medical Academy</Institution>
                  <Duration>2007 – 2014</Duration>
                </InstitutionInfo>
                <DegreeBadge>🎖️ 8 Years Service</DegreeBadge>
              </EducationHeader>

              <HighlightsList>
                <HighlightItem>
                  <span>8 years of rigorous professional training and field service.</span>
                </HighlightItem>
                <HighlightItem>
                  <span>Developed core competencies in operational discipline, emergency response, and strategic planning.</span>
                </HighlightItem>
              </HighlightsList>
            </EducationContent>
          </EducationCard>
        </Timeline>

        <SummarySection>
          <h3>🌟 Educational Journey</h3>
          <p>
            My unique educational path combines rigorous academic training in Business Information Technology 
            with intensive military medical service. This diverse background equips me with both the technical 
            expertise to build enterprise systems and the disciplined mindset to ensure mission-critical reliability. 
            From military medical operations to modern software architecture, my education has shaped me into a 
            professional who delivers excellence under any circumstance.
          </p>
        </SummarySection>
      </div>
    </EducationContainer>
  );
};

export default Education;
