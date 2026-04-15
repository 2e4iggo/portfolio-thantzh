"use client";

import React from "react";
import {
  WorkHistoryContainer,
  PageHeader,
  Timeline,
  ExperienceCard,
  ExperienceContent,
  ExperienceHeader,
  JobTitle,
  CompanyInfo,
  Company,
  Duration,
  AchievementsList,
  AchievementItem,
  HighlightBadge,
  SummarySection,
  SummaryStat,
} from "./workhistory.styles";

const WorkHistory = () => {
  return (
    <WorkHistoryContainer>
      <div className="content-wrapper">
        <PageHeader>
          <h1>Professional Experience</h1>
          <p className="subtitle">16+ Years of Excellence in Software Engineering & Medical Service</p>
        </PageHeader>

        <Timeline>
          {/* Current Position */}
          <ExperienceCard $delay={0.2}>
            <ExperienceContent>
              <ExperienceHeader>
                <JobTitle>
                  <span className="title-icon">💼</span>
                  Senior Software Engineer
                </JobTitle>
                <CompanyInfo>
                  <Company>StarVision Information Technology Malaysia (Regional Headquarters)</Company>
                  <Duration>2024 – Present</Duration>
                </CompanyInfo>
                <HighlightBadge className="current">🟢 Current Position</HighlightBadge>
              </ExperienceHeader>

              <AchievementsList>
                <AchievementItem>
                  <span><strong>Regional System Integration:</strong> Leading the localized implementation and enhancement of the MecWise® ERP & HRMS suite for the Malaysian market, ensuring compliance with local statutory requirements.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Legacy Modernization:</strong> Architecting the transition of proprietary internal modules to modern web standards, focusing on RESTful API design and system scalability to support regional growth.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Full-Stack Enhancement:</strong> Refining internal UI tools and refactoring frontend interfaces to ensure seamless, high-performance data flow between backend services and users.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Cross-Border Collaboration:</strong> Serving as a technical bridge between regional offices to maintain system-wide reliability and security standards for enterprise clients.</span>
                </AchievementItem>
              </AchievementsList>
            </ExperienceContent>
          </ExperienceCard>

          {/* Previous Position */}
          <ExperienceCard $delay={0.4}>
            <ExperienceContent>
              <ExperienceHeader>
                <JobTitle>
                  <span className="title-icon">⚙️</span>
                  Software Engineer
                </JobTitle>
                <CompanyInfo>
                  <Company>StarVision Information Technology Myanmar</Company>
                  <Duration>2018 – 2024</Duration>
                </CompanyInfo>
                <HighlightBadge>6 Years Experience</HighlightBadge>
              </ExperienceHeader>

              <AchievementsList>
                <AchievementItem>
                  <span><strong>Backend Logic & Optimization:</strong> Developed and maintained mission-critical business logic for payroll, tax compliance, and financial reporting modules using C#.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Database Engineering:</strong> Designed and optimized high-concurrency MSSQL databases, implementing advanced indexing and stored procedures to handle massive datasets for large-scale enterprise clients.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Product Development:</strong> Acted as a core developer for the MecWise® suite, translating complex business workflows into reliable software solutions for government and private sectors.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>System Reliability:</strong> Ensured 100% accuracy in high-stakes regulatory environments through rigorous testing and optimization of financial algorithms.</span>
                </AchievementItem>
              </AchievementsList>
            </ExperienceContent>
          </ExperienceCard>

          {/* Military Service */}
          <ExperienceCard $delay={0.6}>
            <ExperienceContent>
              <ExperienceHeader>
                <JobTitle>
                  <span className="title-icon">⚕️</span>
                  Military Medical Specialist
                </JobTitle>
                <CompanyInfo>
                  <Company>Military Medical Corps</Company>
                  <Duration>Age 16 – 24 (8 Years)</Duration>
                </CompanyInfo>
                <HighlightBadge>Foundation of Discipline</HighlightBadge>
              </ExperienceHeader>

              <AchievementsList>
                <AchievementItem>
                  <span><strong>Operational Discipline:</strong> Operated within a strictly regulated medical environment, maintaining 100% adherence to Standard Operating Procedures (SOPs) under high-pressure conditions.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Systems Diagnosis:</strong> Applied advanced troubleshooting and diagnostic logic to rapid-response medical situations—a skill set now utilized in debugging complex software architectures.</span>
                </AchievementItem>
                <AchievementItem>
                  <span><strong>Mission Reliability:</strong> Consistently met time-sensitive objectives and managed sensitive data, demonstrating a "mission-first" work ethic essential for enterprise system stability.</span>
                </AchievementItem>
              </AchievementsList>
            </ExperienceContent>
          </ExperienceCard>
        </Timeline>

        <SummarySection>
          <h3>Career Highlights</h3>
          <div className="summary-stats">
            <SummaryStat>
              <div className="stat-number">16+</div>
              <div className="stat-label">Years Total Experience</div>
            </SummaryStat>
            <SummaryStat>
              <div className="stat-number">8</div>
              <div className="stat-label">Years in ERP/HRMS</div>
            </SummaryStat>
            <SummaryStat>
              <div className="stat-number">8</div>
              <div className="stat-label">Years Medical Service</div>
            </SummaryStat>
          </div>
        </SummarySection>
      </div>
    </WorkHistoryContainer>
  );
};

export default WorkHistory;
